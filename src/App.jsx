import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=50",
            name: "Robert Lau",
            role: "Web Developer"
        },
        content: [
            { type: "paragraph", content: "Lorem ipsum 👋"},
            { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 🚀" },
            { type: "link", content: "lorem/ipsum" },  
        ],
        publishedAt: new Date("2022-07-01 20:00:00")
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=50",
            name: "Robert Lau",
            role: "Web Developer"
        },
        content: [
            { type: "paragraph", content: "Lorem ipsum 👋"},
            { type: "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 🚀" },
            { type: "link", content: "lorem/ipsum" },  
        ],
        publishedAt: new Date("2022-06-30 21:00:00")
    }
];

export function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map((post) => (
                        <Post 
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </>
    )   
}
