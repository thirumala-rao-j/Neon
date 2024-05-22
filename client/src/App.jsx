import { useEffect, useState } from "react";
import "./App.css";
import { generateOpenAiId } from "../public/js/openai";
import { createBusiness, getBusinesses } from "../public/js/business";

function App() {
  const [showTable, setShowTable] = useState(false);
  const [businesses, setBusinesses] = useState([]);

  const [newBusinessName, setNewBusinessName] = useState("");
  const [newBusinessAppType, setNewBusinessAppType] =
    useState("Customer Service");

  const handleViewDocuments = (id) => {
    alert(`Viewing documents for Business ID: ${id}`);
  };

  const handleAddDocuments = (id) => {
    alert(`Adding documents for Business ID: ${id}`);
  };

  const handleChat = (id) => {
    alert(`Starting chat for Business ID: ${id}`);
  };

  const handleAddBusiness = () => {
    if (newBusinessName.trim() === "") {
      alert("Business name cannot be empty");
      return;
    }

    // Generate openAiId && create business doc
    const createDoc = async () => {
      const openAiId = await generateOpenAiId();
      const doc = await createBusiness(
        newBusinessName,
        openAiId,
        newBusinessAppType
      );
      const newBusiness = {
        name: doc.name,
        uniqueId: doc._id,
        openAiId: doc.openAiId,
        appType: doc.appType,
      };
      setBusinesses([...businesses, newBusiness]);
    };

    createDoc();

    setNewBusinessName("");
    setNewBusinessAppType("Customer Service");
  };

  useEffect(() => {
    // fetch business
    const fetchData = async () => {
      const data = await getBusinesses();
      const newBusiness = data.map((doc) => {
        const business = {
          name: doc.name,
          uniqueId: doc._id,
          openAiId: doc.openAiId,
          appType: doc.appType,
        };
        return business;
      });
      setBusinesses([...newBusiness]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setShowTable(!showTable);
        }}
      >
        Businesses
      </a>

      {showTable && (
        <div>
          <div>
            <input
              type="text"
              value={newBusinessName}
              onChange={(e) => setNewBusinessName(e.target.value)}
              placeholder="Enter business name"
            />
            <select
              value={newBusinessAppType}
              onChange={(e) => setNewBusinessAppType(e.target.value)}
            >
              <option value="Customer Service">Customer Service</option>
              <option value="Appointment Booking">Appointment Booking</option>
            </select>
            <button onClick={handleAddBusiness}>Add Business</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Unique ID</th>
                <th>OpenAI ID</th>
                <th>App Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map((business) => (
                <tr key={business.uniqueId}>
                  <td>{business.name}</td>
                  <td>{business.uniqueId}</td>
                  <td>{business.openAiId}</td>
                  <td>{business.appType}</td>
                  <td>
                    <button
                      onClick={() => handleViewDocuments(business.uniqueId)}
                    >
                      View Documents
                    </button>
                    <button
                      onClick={() => handleAddDocuments(business.uniqueId)}
                    >
                      Add Documents
                    </button>
                    <button onClick={() => handleChat(business.uniqueId)}>
                      Chat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
