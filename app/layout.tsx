import Image from 'next/image';
import { mw } from '@/app/font';
import Navbar from '@/app/ui/nav/navbar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={mw.className}>
            <body>
                <header className='p-4'>
                    <Navbar />
                </header >
                {children}
            </body>
        </html>
    )
}