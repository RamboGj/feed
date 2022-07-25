import styles from "./Post.module.css"

interface PostProps {
    author: string;
    content: string;
}

export default function Post(props: PostProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/RamboGj.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>
                            João Rambo
                        </strong>
                        <span>
                            Web developer | Web3
                        </span>
                    </div>  
                </div>     

                <time 
                    title="25 de Julho às 10:30h" 
                    dateTime="2022-07-25 10:29:30"
                >
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    Fala galeraa 👋
                </p>
            
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
            
                <p>
                    <a href="/">
                        jane.design/doctorcare
                    </a>
                </p>

                <p>
                    <a href="/">#novoprojeto </a>{' '}
                    <a href="/">#nlw  </a>{' '}
                    <a href="/">#rocketseat</a>
                </p>
            </div>
        </article>
       
    )
}