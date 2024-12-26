"use client";

import "./globals.css";
import NavBar from "@/components/NavBar";
import HorizontalNav from "@/components/HorizontalNav";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <main className="flex flex-row">
                        <div>
                            <NavBar />
                        </div>
                        <div>
                            <HorizontalNav />
                            {children}
                        </div>
                    </main>
                </SessionProvider>
            </body>
        </html>
    );
}