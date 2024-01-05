'use client';

import Link from "next/link";
import { oswald } from "@/app/font";
import styles from "./nav.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {
        name: 'accueil',
        href: '/',
    },
    {
        name: 'projets',
        href: '/projects',
    },
    {
        name: 'contact',
        href: '/contact',
    },
];


export default function Navlinks({ customHandleClick }: { customHandleClick: () => void }) {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <li key={link.name} className={clsx(
                        `ui-Navlinks ${styles.navlink} ${oswald.className}`,
                        { [styles.active]: pathname === link.href },
                    )}>
                        <Link href={link.href}>
                            <span onClick={customHandleClick}>{link.name}</span>
                        </Link >
                    </li>
                );
            })}
        </>
    );
}