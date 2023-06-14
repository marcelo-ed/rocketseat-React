import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment(){
    return(


        <div className={styles.comment}>
            
        <div className={styles.commentBox}>

            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>marcelo-ed</strong>
                        <time title='12 de julho de 2023, às 15:58' dateTime='12-06-2023 15:58'> Há 1 hora </time>
                    </div>

                    <button>
                        <Trash title="deleter comentário" size={24} />
                    </button>
                </header>

                <p>Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.</p>
            </div>
            
        <footer> <button><ThumbsUp />  likes <span>20</span></button></footer>

        </div>


        </div>
    )
}