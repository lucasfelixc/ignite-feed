import {Header} from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Felix"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit aliquam inventore culpa totam, dolorem, consectetur harum et adipisci dolores illum quasi nostrum possimus ipsam? Quaerat nam velit ratione recusandae."
          />
          <Post
            author="Lucas Felix"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit aliquam inventore culpa totam, dolorem, consectetur harum et adipisci dolores illum quasi nostrum possimus ipsam? Quaerat nam velit ratione recusandae."
          />
        </main>
      </div>
    </div>
  )
}

export default App

