"use client";
import { CompanyTable } from "@/components/company-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCompanies } from "@/lib/hooks/useCompanies";
import Link from "next/link";

export default function Home() {
  const { companies, isLoading, hasError } = useCompanies();

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
              <Link className="underline font-medium" href="/next">
                Try server rendered version
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : hasError ? (
              <p>Opps something went wrong</p>
            ) : (
              companies && <CompanyTable companies={companies} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
