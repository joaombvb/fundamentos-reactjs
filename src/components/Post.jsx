import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://xesque.rocketseat.dev/users/avatar/profile-35fbe46d-88c8-4083-ade4-2fcde39eccff-1709175086396.jpg" />

                    <div className={styles.authorInfo}>
                        <strong>João Marcelo Vilas Boas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="2 de abril de 2025" dateTime="2025-04-02 12:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com React 🚀</p>
                <p>
                    <a href="#">#newproject</a>{" "}
                    <a href="#">#react</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}