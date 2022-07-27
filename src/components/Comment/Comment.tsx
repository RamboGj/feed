import { ThumbsUp, Trash } from "phosphor-react"
import Avatar from "../Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export default function Comment({ content, onDeleteComment }: CommentProps) {
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar isOutlined={false} src="https://github.com/RamboGj.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                João Rambo
                            </strong>
                            <time 
                                title="25 de Julho às 10:30h" 
                                dateTime="2022-07-25 10:29:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp /> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}