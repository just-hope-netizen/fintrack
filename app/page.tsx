import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Summary from "@/components/summary";
import { columns, Transaction } from "@/components/columns";
import HomeHeader from "@/components/homeHeader";
import { TransactionTable } from "@/components/TransactionTable";


export default function Page() {
  return (
    <main className=" space-y-7 ">
      <HomeHeader />
      <Tabs defaultValue="overview" className=" w-full">
        <TabsList className="p-0  w-full flex  border-b  bg-white">
          <TabsTrigger className="py-3  px-7 " value="overview">Overview</TabsTrigger>
          <TabsTrigger className="py-3  px-7" value="transactions">  Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className=" flex-col">
          <Summary />
          <TransactionTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="transactions">Transactions</TabsContent>
      </Tabs>
    </main>
  )
}

const data: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: 'Salary',
    amount: 3000,
    currency: "USD",
    type: "Credit"

  },
  {
    id: "2",
    date: "2023-10-02",
    remark: 'Groceries',
    amount: -150,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "3",
    date: "2023-10-03",
    remark: 'Gym Membership',
    amount: -50,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "4",
    date: "2023-10-04",
    remark: 'Dinner',
    amount: -40,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "5",
    date: "2023-10-05",
    remark: 'Movie Tickets',
    amount: -30,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "6",
    date: "2023-10-06",
    remark: 'Rent',
    amount: -1200,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "7",
    date: "2023-10-07",
    remark: 'Utilities',
    amount: -100,
    currency: "USD",
    type: "Debit"

  },
  {
    id: "8",
    date: "2023-10-08",
    remark: 'Car Payment',
    amount: -400,
    currency: "USD",
    type: "Debit"

  }, {
    id: "9",
    date: "2023-10-09",
    remark: 'Insurance',
    amount: -200,
    currency: "USD",
    type: "Debit"

  },
]


