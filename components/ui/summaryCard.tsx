import React from 'react'
import dots from '../../public/Union.png';
import Image from 'next/image';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface SummaryCardProps {
    title: string;
    value: number;
    change: number;
    prefix?: string;
    plus?: string

}

const SummaryCard: React.FC<SummaryCardProps> = ({
    prefix, title, change, value, plus
}) => {

    return (
        <Card className=' bg-[#386776]/10  gap-4.5 sm:max-w-[223px] w-full'>
            <CardHeader className=' px-2'>
                <div className=' flex flex-wrap  items-center justify-between'>

                    <h5 className="font-bold text-lg  ">{title}
                    </h5>
                    <Image src={dots} alt="icon" className='' />
                </div>
            </CardHeader>
            <CardContent className=' px-2'>

                    <p className="text-[34px]  font-bold mb-2">
                        {prefix}{value.toLocaleString()}
                    </p>
                    <span className="text-sm font-medium text-[#3A6C7B]">
                        {plus} {change}%
                    </span>
            </CardContent>

        </Card>
        // <div className=' bg-[#386776]/10 rounded-2xl p-7  grow  md:max-w-[223px] space-y-4'>
        //     <div className=' flex items-center justify-between'>

        //         <h5 className="font-bold text-lg  ">{title}
        //         </h5>
        //         <Image src={dots} alt="icon" className='' />
        //     </div>
        //     <div>

        //         <p className="text-[34px]  font-bold mb-2">
        //             {prefix}{value.toLocaleString()}
        //         </p>
        //         <span className="text-sm font-medium text-[#3A6C7B]">
        //            {plus} {change}%
        //         </span>
        //     </div>
        // </div>
    )
}

export default SummaryCard