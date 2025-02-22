export interface APIParams {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  headers?: HeadersInit;
  setLoading: (loading: boolean) => void;
}

export async function apiCall<T = any>({ url, method = "GET", body, headers, setLoading }: APIParams): Promise<T | null> {
  try {
    setLoading(true); // Start loading

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("API Call Failed:", error);
    return null;
  } finally {
    setLoading(false); // Stop loading
  }
}
