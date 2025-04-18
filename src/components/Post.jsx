import styles from './Post.module.css'
import { useState } from 'react'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'


export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(comment) {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event) {
        setNewCommentText(event.target.value)
    }
        

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
    
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder="Deixe um comentário" 
                name="comment"
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}