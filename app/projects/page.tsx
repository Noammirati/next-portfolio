import Card from '@/ui/projects/card';
import styles from '@/ui/projects/projects.module.css';

const projects = [
    {
        title: 'Projet',
        img: 'https://picsum.photos/300',
        intro: 'A random project'

    }, {
        title: 'Projet',
        img: 'https://picsum.photos/400',
        intro: 'A random project'
    }, {
        title: 'Projet',
        img: 'https://picsum.photos/500',
        intro: 'A random project'
    }, {
        title: 'Projet',
        img: 'https://picsum.photos/600',
        intro: 'A random project'
    }, {
        title: 'Projet',
        img: 'https://picsum.photos/700',
        intro: 'A random project'
    }, {
        title: 'Projet',
        img: 'https://picsum.photos/800',
        intro: 'A random project'
    }, {
        title: 'Projet',
        img: 'https://picsum.photos/900',
        intro: 'A random project'
    },
]

export default function Page() {
    return (
        <>
            <h1 className='title'>Projets</h1>
            <div className={styles.container}>
                {projects.map((p) => {
                    return (
                        <Card key={p.title} name={p.title} srcPicture={p.img} introduction={p.intro}/>
                    );
                })}
            </div>

        </>
    )
}