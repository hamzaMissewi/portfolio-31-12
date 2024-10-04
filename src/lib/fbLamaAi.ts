export const callCompletion = async () => {
  try {
    const res = await fetch("/api/llama3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (err) {
  } finally {
  }
};
