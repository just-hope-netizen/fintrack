"use client"
import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    useSidebar
} from "@/components/ui/sidebar"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const { toggleSidebar } = useSidebar()

    return (
        <Sidebar
            className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
            {...props}
        >
            <SidebarContent>
                <ul className={` py-17 font-medium `} >
                    <li>

                        <Link onClick={() => toggleSidebar()} href={"/"} className={` ${pathname === "/" && ' rounded-2xl bg-[#386776]/10  text-[#3A6C7B] '} py-2 pl-4 block`}>
                            Dashboard
                        </Link>
                    </li>
                    <li>

                        <Link
                            onClick={() => toggleSidebar()}
                            className={` ${pathname === "/transactions" && ' rounded-2xl bg-[#386776]/10 text-[#3A6C7B]'} py-2 pl-4 block`} href={"/transactions"}>
                            Transactions
                        </Link>
                    </li>
                    <li>

                        <Link
                            onClick={() => toggleSidebar()}
                            className={` ${pathname === "/reports" && ' rounded-2xl bg-[#386776]/10 text-[#3A6C7B]'} py-2 pl-4 block`} href={"/reports"}>
                            Reports
                        </Link>
                    </li>
                    <li>

                        <Link
                            onClick={() => toggleSidebar()}
                            className={` ${pathname === "/settings" && ' rounded-2xl bg-[#386776]/10 text-[#3A6C7B]'} py-2 pl-4 block`} href={"/settings"}>
                            Settings
                        </Link>
                    </li>
                </ul>
            </SidebarContent>

        </Sidebar>
    )
}
