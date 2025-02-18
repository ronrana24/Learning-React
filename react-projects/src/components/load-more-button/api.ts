export interface LoadImagesParams {
  url: string;
  page: number;
  limit?: number;
}

export default async function LoadImages(
  { url, page, limit = 10 }: LoadImagesParams,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<any[]> {
  setLoading(true);
  const URL = `${url}page=${page}&per_page=${limit}`;
  const response = await fetch(URL, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  setLoading(false);
  return data;
}
