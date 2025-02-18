export default async function GetImages(
  url: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    setLoading(true); // Set loading to true when the request starts
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; // Re-throw the error or handle it appropriately
  } finally {
    setLoading(false); // Set loading to false when the request finishes
  }
}
