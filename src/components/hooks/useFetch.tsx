import { useEffect, useState } from "react";

export default function useFetch(url: string, options?: RequestInit) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true; // To prevent state updates after unmounting

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error before a new request
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (error: any) {
        if (isMounted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to avoid memory leaks
    };
  }, [url, options]);

  return { data, loading, error };
}
