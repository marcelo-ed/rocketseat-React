import { Header }from './components/header.jsx'
import './styles/global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar.jsx'

function App() {
  

  return (
    <>
        <Header />

        <div className={styles.wrapper}>
        <Sidebar />

          <main>
            
          </main>
        </div>
    </>
  )
}

export default App
