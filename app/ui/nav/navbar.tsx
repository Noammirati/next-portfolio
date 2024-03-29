'use client';

import Navlinks from "./navlinks";
import styles from "./nav.module.css";
import clsx from "clsx";
import { useState } from 'react';
import Image from "next/image";
import { SVGBurger, SVGCross } from "@/app/icons";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const hide = () => { setShow(false) }
    return (
        <>
            <button
                className={styles.toggle}
                aria-controls="nav"
                aria-expanded={show}
                onClick={() => { setShow(!show) }}>
                <span className="sr-only">Menu</span>
                <span>{show ? <SVGCross /> : <SVGBurger />}</span>
            </button>
            <ul id="nav" className={clsx(
                `${styles.navbar} flex justify-end`,
                { [styles.show]: show }
            )}>
                <Navlinks customHandleClick={hide}/>
            </ul>
        </>
    );
}