export const fetchData = async () => {
  const response = await fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );
  if (!response.ok) {
    throw new Error("Fetching Failed");
  }
  const data = await response.json();
  return data;
};
