import React from 'react'
import SummaryCard from './ui/summaryCard';

const Summary = () => {
    return (
        <>
            <h4 className='  font-bold text-lg mb-4.5 mt-7'>Summary</h4>
            <section className=" grid xs:grid-cols-1 grid-cols-2 gap-y-4 sm:flex flex-wrap md:gap-x-7 gap-x-4">
                <SummaryCard title="Total Balance" value={summaryData.totalBalance} plus='+' prefix="$" change={summaryData.balanceChange} />
                <SummaryCard title="Total Credits" value={summaryData.totalCredits} plus='+' prefix="$" change={summaryData.creditsChange} />
                <SummaryCard title="Total debits" value={summaryData.totalDebits} prefix="$" change={summaryData.debitsChange} />
                <SummaryCard title="Transactions" value={summaryData.transactionCount} plus='+' change={summaryData.transactionChange} />
            </section></>
    )
}

export default Summary

interface DashboardSummary {
    totalBalance: number;
    totalCredits: number;
    totalDebits: number;
    transactionCount: number;
    balanceChange: number;
    creditsChange: number;
    debitsChange: number;
    transactionChange: number;
}


const summaryData: DashboardSummary = {

    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10,
};