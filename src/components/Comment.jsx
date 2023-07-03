/* eslint-disable react/prop-types */
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import {Avatar} from './Avatar.jsx'

export function Comment({ content, deleteComment }){
    function handleDeleteComment(){
        deleteComment(content)
    }

    return(


        <div className={styles.comment}>

            <Avatar className="authorImage" src="https://github.com/marcelo-ed.png" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        
                            <strong>Marcelo-ed</strong>
                            <time title='12 de julho de 2023, às 15:58' dateTime='12-06-2023 15:58'> Há 1 hora </time>
                        </div>

                        <button title="deleter comentário" id={"dsas"} onClick={handleDeleteComment}>
                            <Trash  size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                
            <footer> <button><ThumbsUp />  likes <span>20</span></button></footer>

            </div>



        </div>
    )
}