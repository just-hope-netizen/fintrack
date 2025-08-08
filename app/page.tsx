import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Summary from "@/components/summary";
import { columns } from "@/components/columns";
import HomeHeader from "@/components/homeHeader";
import { TransactionTable } from "@/components/TransactionTable";
import { data } from "@/lib/utils";
import NoActivity from "@/components/noActivity";


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
        <TabsContent value="transactions"><NoActivity /></TabsContent>
      </Tabs>
    </main>
  )
}




