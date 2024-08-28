"use server";

import { Company } from "../types/company.types";

export async function getCompanies() {
  const response = await fetch("https://venefish.enesien.com/api/companies");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data as Company[];
}
