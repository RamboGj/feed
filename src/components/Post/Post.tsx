import Avatar from "../Avatar";
import Comment from "../Comment/Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { LineSegment } from "phosphor-react";
import { useState } from "react";

interface PostProps {
    id: number;
    author: {
        avatarUrl: string
        name: string;
        role: string;
    };
    content: {
        type: string;
        content: string;
    }[];
    publishedAt: Date;
}

export default function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    const [commentContent, setComentContent] = useState<string>('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewCommentChange(e: any) {
        setComentContent(e.target.value)
    }

    function handleCreateNewComment() {
        event?.preventDefault()

        setComments([...comments, commentContent])
        setComentContent('')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>
                            {author.name}
                        </strong>
                        <span>
                            {author.role}
                        </span>
                    </div>  
                </div>     

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content && content.map((cnt) => {
                    if (cnt.type === 'paragraph') {
                        return <p key={cnt.content}>{cnt.content}</p>
                        
                    } else if (cnt.type === 'link') {
                        return <p key={cnt.content}><a href="#">{cnt.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={commentContent}
                    onChange={(e) => handleNewCommentChange(e)}
                    name="comment" 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">  
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments && comments.map((comment) => {
                    return (
                        <Comment
                            onDeleteComment={deleteComment}
                            key={comment}
                            content={comment}
                        />
                    )
                })}
            </div>
        </article>
       
    )
}