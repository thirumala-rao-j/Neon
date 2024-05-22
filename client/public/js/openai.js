export const generateOpenAiId = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/assistant`,
    {
      method: "POST",
      body: {},
    }
  );

  const data = await res.json();

  if (data.status === "success") {
    return data.assistant_id;
  }
};
