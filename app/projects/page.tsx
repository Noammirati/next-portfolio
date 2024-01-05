import Card from '@/ui/projects/card';
import styles from '@/ui/projects/projects.module.css';

const projects = [
    {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'

    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    }, {
        title: 'Prout',
        img: 'https://picsum.photos/200',
        intro: 'A random project'
    },
]

export default function Page() {
    return (
        <>
            <h1>Projets</h1>
            <div className={styles.container}>
                {projects.map((p) => {
                    return (
                        <Card name={p.title} srcPicture={p.img} introduction={p.intro}/>
                    );
                })}
            </div>

        </>
    )
}