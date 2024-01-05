import Image from 'next/image';
import Link from 'next/link';
import styles from './projects.module.css';

export default function Card({ name, srcPicture, introduction }:
    { name: string, srcPicture: string, introduction: string }) {
    return (
        <Link href="#" className={`ui-projects-Card ${styles.card}`}>
            <Image
                src={srcPicture}
                sizes="(min-width: 768px) 80px, 60px"
                layout='responsive'
                width={300}
                height={300}
                alt={`illustration du projet ${name}`}
                className={styles.card__img} />
            <span className={styles.card__footer}>
                <span>{name}</span>
                <p>{introduction}</p>
            </span>
        </Link>
    )
}