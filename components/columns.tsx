"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "./ui/button"
import claretDown from "../public/claret down.png"
import Image from "next/image"



export interface Transaction {
    id: string;
    date: string;
    remark: string;
    amount: number;
    currency: string;
    type: 'Credit' | 'Debit';
}


export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className=" pl-0  text-[#15272D]/60"
                    onClick={() => {

                        column.toggleSorting(column.getIsSorted() === "asc")

                    }

                    }
                >
                    Date

                    <Image src={claretDown} alt="icon" className={` ${column.getIsSorted() === "asc" && " rotate-180"} `} />
                </Button>
            )
        },
        cell: ({ row }) => {

            return <div className=" mr-1 ">
                {row.original.date}
            </div>
        },
    },
    {
        accessorKey: "remark",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className=" pl-0  text-[#15272D]/60"
                    onClick={() => {

                        column.toggleSorting(column.getIsSorted() === "asc")

                    }

                    }
                >
                    Remark

                    <Image src={claretDown} alt="icon" className={` ${column.getIsSorted() === "asc" && " rotate-180"} `} />
                </Button>
            )
        }
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className=" pl-0  text-[#15272D]/60"
                    onClick={() => {

                        column.toggleSorting(column.getIsSorted() === "asc")

                    }

                    }
                >
                    Amount

                    <Image src={claretDown} alt="icon" className={` ${column.getIsSorted() === "asc" && " rotate-180"} `} />
                </Button>
            )
        },
        cell: ({ row }) => {

            return <span className=" ">
                {Number.isInteger(row.original.amount) && row.original.amount < 0 ?
                `- $ ${removeMinusSymbolFromNum(row.original.amount).toLocaleString()}`  : ` $ ${row.original.amount.toLocaleString()}` }
            </span>
        },
    },
    {
        accessorKey: "currency",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className=" pl-0  text-[#15272D]/60"
                    onClick={() => {

                        column.toggleSorting(column.getIsSorted() === "asc")

                    }

                    }
                >
                    Currency

                    <Image src={claretDown} alt="icon" className={` ${column.getIsSorted() === "asc" && " rotate-180"} `} />
                </Button>
            )
        },
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className=" pl-0  text-[#15272D]/60"
                    onClick={() => {

                        column.toggleSorting(column.getIsSorted() === "asc")

                    }

                    }
                >
                    Type

                    <Image src={claretDown} alt="icon" className={` ${column.getIsSorted() === "asc" && " rotate-180"} `} />
                </Button>
            )
        },
        cell: ({ row }) => {

            return <div className=" bg-[#386776]/10 flex w-fit  py-1   rounded-2xl px-2 gap-2 items-center font-medium">
                <div className={`rounded-full  w-2 h-2 ${row.original.type === "Credit" ? "  bg-[#087A2E] " : "bg-[#C6381B] "}`}></div>
                {row.original.type}
            </div>
        },
    },
]

const removeMinusSymbolFromNum = (negativeNum: number): number => {
    const stringifyNum = negativeNum.toString().slice(1)
    return Number(stringifyNum)

}