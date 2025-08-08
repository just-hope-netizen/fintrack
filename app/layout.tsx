
import type { Metadata } from "next";
import "./globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/header";
import { AppSidebar } from "@/components/sidebar";



export const metadata: Metadata = {
  title: "Fintrack",
  description: "Fintrack implemented by netizen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <div className="px-5 lg:px-20 [--header-height:calc(--spacing(14))]">
          <SidebarProvider className="flex flex-col">
            <Header />
            <div className="flex flex-1 ">
              <AppSidebar />
              <SidebarInset className=" lg:py-7">
                {children}
              </SidebarInset>
            </div>
          </SidebarProvider>
        </div>


      </body>
    </html>
  );
}
