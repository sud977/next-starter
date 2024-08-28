import { useState, useEffect } from "react";
import type { Company } from "../types/company.types";
import { getCompanies } from "../actions/company";

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
      } catch (err: any) {
        setError(err.message);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();

    return () => {
      controller.abort();
    };
  }, []);

  return { companies, isLoading, hasError };
}
