'use client'
import { Search } from "lucide-react"
import { SidebarInput } from "@/components/ui/sidebar"
import { FormEvent, useState } from "react"
import { data } from "@/lib/utils"
import { columns, Transaction } from "./columns"
import { TransactionTable } from "./TransactionTable"
import { LoadingButton } from "./ui/loadingButton"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [inputValue, setInputValue] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [filteredData, setFilteredData] = useState<Transaction[]>([])

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    //simulate data fetching
    setTimeout(()=>{
      const matchingQuery: Transaction[] = data.filter(item => item.remark.toLocaleLowerCase().includes(inputValue.toLowerCase()))
      setFilteredData(matchingQuery)
      setInputValue('')
      setIsLoading(false)
    }, 2000)
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
       
        <LoadingButton loading={isLoading}>
          Search

        </LoadingButton>

      </form>
      <TransactionTable columns={columns} data={filteredData} />
    </>
  )
}
