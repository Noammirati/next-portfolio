import Image from 'next/image';
import { oswald } from '@/app/font';
import Navbar from '@/app/ui/nav/navbar';
import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={oswald.className}>
            <body>
                <header className='p-4 flex justify-between'>
                    <Link href='/'>
                        <Image
                            src='/assets/logo-short.svg'
                            width={100}
                            height={150}
                            alt='Noa Ammirati'
                        />
                    </Link>
                </header>
                {children}
            </body>
        </html>
    )
}