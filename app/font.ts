import { Merriweather, Merriweather_Sans, Oswald } from 'next/font/google';

export const mw = Merriweather({
    subsets: ['latin'],
    display: 'swap',
    weight: '300',
});

    
export const mws = Merriweather_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    weight: '500',
});
