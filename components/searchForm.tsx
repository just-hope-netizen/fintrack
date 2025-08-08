'use client'
import { Search } from "lucide-react"
import { SidebarInput } from "@/components/ui/sidebar"
import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { data } from "@/lib/utils"
import { columns, Transaction } from "./columns"
import { TransactionTable } from "./TransactionTable"
import { Skeleton } from "./ui/skeleton"
import { LoadingButton } from "./ui/loadingButton"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [inputValue, setInputValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filteredData, setFilteredData] = useState<Transaction[]>([])

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const matchingQuery: Transaction[] = data.filter(item => item.remark.toLocaleLowerCase().includes(inputValue.toLowerCase()))
    setFilteredData(matchingQuery)
    setInputValue('')
    setIsLoading(false)
  }
  return (
    < >
      <form {...props} onSubmit={searchHandler}>
        <div className="relative my-4">

          <SidebarInput
            id="search"
            placeholder="Please search based on remark"
            className="h-12 "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </div>
        {/* <Button  className=" bg-[#386776]">
        </Button> */}
        <LoadingButton loading={isLoading}>
          Search

        </LoadingButton>

      </form>
      {/* <Skeleton className="h-[20px] w-[100px] rounded-full" /> */}
      <TransactionTable columns={columns} data={filteredData} />
    </>
  )
}
