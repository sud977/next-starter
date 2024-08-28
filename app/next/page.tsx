import { getCompanies } from "@/lib/actions/company";
import { CompanyTable } from "@/components/company-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

async function fetchCompaniesData() {
  try {
    const data = await getCompanies();
    return data;
  } catch (err: any) {
    console.error(err.message);
    return null;
  }
}

export default async function Page() {
  const companies = await fetchCompaniesData();

  if (!companies) {
    return <p>Opps something went wrong</p>;
  }

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <div className="bg-white/10 p-4">
        <div className="container">
          <h2 className="font-ornate text-2xl font-semibold tracking-tighter ">
            React Next.js Tester
          </h2>
        </div>
      </div>
      <div className="container">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Company Table</CardTitle>
            <CardDescription>
              <Link className="underline font-medium" href="/">
                Try client-only version
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CompanyTable companies={companies} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
