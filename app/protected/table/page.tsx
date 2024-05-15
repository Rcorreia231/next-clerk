import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      company: "Google",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      position: "software developer",
      location: "California",
      date: "4/23/2024",
    },
    {
      id: "128ed52f",
      company: "Microsoft",
      amount: 150,
      status: "processing",
      email: "verstappan@example.com",
      position: "IT aid",
      location: "Texas",
      date: "5/01/2024",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
