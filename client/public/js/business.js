export const getBusinesses = async () => {
  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/business`);
  const data = await res.json();

  if (data.status === "success") {
    return data.data;
  }
};

export const createBusiness = async (name, openAiId, appType) => {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/business`,
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        openAiId: openAiId,
        appType: appType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (data.status === "success") {
    return data.data;
  }
};
