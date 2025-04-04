import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import './global.css'
import styles from'./App.module.css'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Marcelo Vilas Boas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          />
          <Post 
            author="João Marcelo Vilas Boas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          />
        </main>
      </div>

    </div>
  )
}


export default App