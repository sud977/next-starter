import { Company } from "@/lib/types/company.types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";

export function CompanyTable({ companies }: { companies: Company[] }) {
  const revenueTotal = companies.reduce(
    (acc, company) => acc + company.revenue,
    0
  );
  const employeeTotal = companies.reduce(
    (acc, company) => acc + company.employees,
    0
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Website</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Employees</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.description}</TableCell>
            <TableCell>{company.location}</TableCell>
            <TableCell>{company.website}</TableCell>
            <TableCell>{formatCurrency(company.revenue)}</TableCell>
            <TableCell>{company.employees}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="uppercase" colSpan={4}>
            Total
          </TableCell>
          <TableCell>{formatCurrency(revenueTotal)}</TableCell>
          <TableCell>{employeeTotal}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
