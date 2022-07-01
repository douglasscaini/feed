import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=50"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Robert Lau</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="30 de maio às 08:00h" dateTime="2022-06-30 08:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum 👋</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 🚀</p> 

                <p><a href="#">lorem/ipsum</a></p>
                <p>
                    <a href="#">#lorem</a>
                    <a href="#">#ipsum</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}