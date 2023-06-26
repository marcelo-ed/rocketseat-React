import { Header }from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import {Post} from './components/Post.jsx'

import './styles/global.css'
import styles from './App.module.css'

// eslint-disable-next-line no-unused-vars
let posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/iotarjr.png',
      name: 'marcelo-ed',
      office: 'programmer student',
    },
    content: [
      {type: 'paragraph', content: 'Não sei exatamente o que colocar nesse comentário, então vou colocar algumas frases aleatórias que achar no google.'},
      {type: 'paragraph', content: 'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.'},
      {type: 'paragraph', content: 'Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.'},
      {type: 'paragraph', content: 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.'},
      {type: 'paragraph', content: 'A vida é um processo aleatório de incertezas que dependem do tempo. E o tempo? É uma máquina de estágios finitos composta por elementos interdependentes. Ou talvez seja apenas uma ilusão, e na verdade tudo ocorre simultaneamente e, portanto, estamos apenas parados em um ponto específico pensando que algo está mudando.'},
    ],
    publishedAt: new Date('2023-06-20T15:10:58')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/iotarjr.png',
      name: 'marcelo-ed',
      office: 'programmer student',
    },
    content: [
      {type: 'paragraph', content: 'Não sei exatamente o que colocar nesse comentário, então vou colocar algumas frases aleatórias que achar no google.'},
      {type: 'paragraph', content: 'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.'},
      {type: 'paragraph', content: 'Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.'},
      {type: 'paragraph', content: 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.'},
      {type: 'paragraph', content: 'A vida é um processo aleatório de incertezas que dependem do tempo. E o tempo? É uma máquina de estágios finitos composta por elementos interdependentes. Ou talvez seja apenas uma ilusão, e na verdade tudo ocorre simultaneamente e, portanto, estamos apenas parados em um ponto específico pensando que algo está mudando.'},
    ],
    publishedAt: new Date('2023-06-20T15:10:58')
  }
]

function App() {

  return (
    <>
        <Header />

        <div className={styles.wrapper}>
        <Sidebar />

          <main>
          {
                posts.map(((post)=> {
                  return (<Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  />)
                }
              )
            )
          }
          </main>
        </div>
    </>
  )
}

export default App
