import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../styles/globals.scss';
import {appConfig} from "@/config/app";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: appConfig?.appName,
    description: appConfig?.appName,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
