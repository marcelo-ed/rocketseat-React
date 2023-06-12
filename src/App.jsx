import { Header }from './components/header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import {Post} from './components/Post.jsx'

import './styles/global.css'
import styles from './App.module.css'



function App() {

  return (
    <>
        <Header />

        <div className={styles.wrapper}>
        <Sidebar />

          <main>
            <Post />
            <Post />
          </main>
        </div>
    </>
  )
}

export default App
