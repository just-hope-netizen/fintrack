import { Search } from "lucide-react"

// import { Label } from "@/components/ui/label"
import { SidebarInput } from "@/components/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative mt-4">
        {/* <Label htmlFor="search" className="sr-only">
          Search
        </Label> */}
        <SidebarInput
          id="search"
          placeholder="Type to search..."
          className="h-8 pl-"
        />
        <Search className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </div>
    </form>
  )
}
