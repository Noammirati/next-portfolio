import '@/app/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Noa Ammirati',
}

export default function Page() {
    return (
        <>
            <h1 className='title'>Noa Ammirati - site en cours de développement - <a href="https://www.linkedin.com/in/noammirati/">contactez moi</a> </h1>
        </>
    )
}