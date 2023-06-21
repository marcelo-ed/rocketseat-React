import { Header }from './components/header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import {Post} from './components/Post.jsx'

import './styles/global.css'
import styles from './App.module.css'

let posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcelo-ed.png',
      name: 'marcelo-ed',
      office: 'programmer student',
    },
    content: [
      {type: 'paragraph', content: 'Não sei exatamente o que colocar nesse comentário, então vou colocar algumas frases aleatórias que achar no google.'},
      {type: 'paragraph', content: 'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.'},
      {type: 'paragraph', content: 'Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.'},
      {type: 'paragraph', content: 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.'},
      ,{type: 'paragraph', content: 'A vida é um processo aleatório de incertezas que dependem do tempo. E o tempo? É uma máquina de estágios finitos composta por elementos interdependentes. Ou talvez seja apenas uma ilusão, e na verdade tudo ocorre simultaneamente e, portanto, estamos apenas parados em um ponto específico pensando que algo está mudando.'},
    ],
    publishedAt: new Date('20-06-2023 16:52:57')
  }
]

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
