import Image from 'next/image';
import styles from './projects.module.css';

export default function Card({ name, srcPicture, introduction }:
    { name: string, srcPicture: string, introduction: string }) {
    return (
        <div className={`ui-projects-Card ${styles.card}`}>
            <Image
                src={srcPicture}
                width='200' 
                height='200'
                alt={`illustration du projet ${name}`} />
            <h2>{name}</h2>
            <p>{introduction}</p>
        </div>
    )
}