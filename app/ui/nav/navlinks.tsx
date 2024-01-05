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
        //icon: HomeIcon 
    },
    {
        name: 'projets',
        href: '/projects',
        //icon: HomeIcon 
    },
    {
        name: 'à propos',
        href: '/about',
        //icon: HomeIcon 
    },
    {
        name: 'contact',
        href: '/contact',
        //icon: DocumentDuplicateIcon,
    },
];


export default function Navlinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const active = styles.active;
                return (
                    <li key={link.name} className={clsx(
                        `ui-Navlinks ${styles.navlink} ${oswald.className}`,
                        { [styles.active]: pathname === link.href },
                    )}>
                        <Link href={link.href}>
                            {link.name}
                        </Link >
                    </li>
                );
            })}
        </>
    );
}