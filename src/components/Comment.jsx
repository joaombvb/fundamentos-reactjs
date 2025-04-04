import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://xesque.rocketseat.dev/users/avatar/profile-35fbe46d-88c8-4083-ade4-2fcde39eccff-1709175086396.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Marcelo</strong>
                            <time title="2 de abril às 10:00" dateTime="2024-04-02 10:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button type="button" title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Dev, parabéns!! 👏👏</p>
                </div>

                <footer>    
                    <button type="button">
                        <ThumbsUp size={20} />
                        Gostei <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
