import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import './global.css'
import styles from'./App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-35fbe46d-88c8-4083-ade4-2fcde39eccff-1709175086396.jpg',
      name: 'João Marcelo Vilas Boas',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com React 🚀' }, 
      { type: 'link', content: '#React' },
    ],
    publishedAt: new Date('2025-04-04 10:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia pessoal!' },
      { type: 'paragraph', content: 'Vamos aprender mais sobre react?' }, 
    ],
    publishedAt: new Date('2025-04-02 12:00:00'),
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            )
          })}
          
        </main>
      </div>

    </div>
  )
}


export default App