"use client"

import logo from '../public/logo.png'
import menuIcon from '../public/menu-icon.png'
import { SearchForm } from "@/components/searchForm"
import avatar from '../public/profile.png'
import grid from '../public/grid.png'
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { Search } from 'lucide-react'

export function Header() {
    const { toggleSidebar } = useSidebar()

    return (
        <header className="bg-background sticky top-0 py-5 z-50 flex w-full items-center">
            <div className="flex h-(--header-height) w-full items-center justify-between gap-2  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg md:px-4">
                <div className=' flex items-center gap-5'>
                    <Button
                        className="h-8 w-8"
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                    >
                        <Image
                            aria-hidden
                            src={menuIcon}
                            alt="menu icon"
                            width={18}
                            height={12}

                        />
                    </Button>
                    <Link href={"/"}>
                        <Image
                            width={112}
                            height={32}
                            aria-hidden
                            src={logo}
                            alt="logo icon"

                        />
                    </Link>

                </div>

                <div className=' flex gap-2 md:gap-5 items-center'>

                    <Dialog>
                        <DialogTrigger>        <Search className="size-4 cursor-pointer " />
                        </DialogTrigger>
                        <DialogContent >
                            <SearchForm className="" />
                            <DialogTitle />
                        </DialogContent>
                    </Dialog>


                    <Image
                        aria-hidden
                        src={grid}
                        alt="icon"
                        className=" mx-5 hidden sm:block"

                    />
                    <Link href={"/"}>
                        <Image
                            aria-hidden
                            src={avatar}
                            alt="icon"
                            width={40}

                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}
