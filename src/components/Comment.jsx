import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://images.unsplash.com/photo-1597004897768-c503466472cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lincoln Dru</strong>
                            <time title="30 de maio às 08:00h" dateTime="2022-06-30 08:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Good!</p>
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