/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Comment } from './Comment'
import {Avatar} from    './Avatar'
import styles from './Post.module.css'
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { useState } from 'react';




    /* eslint-disable-next-line react/prop-types */
export function Post({ author,  publishedAt, content  }){
    const dataDePublicacao = new Intl.DateTimeFormat('pt-BR', {
        day:   '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    const dateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [commentList, setCommentList] = useState([
        "",
        "",
        ""
    ])

const [newCommentContent, setNewCommentContent] = useState(
    ""
)

const textarea = document.getElementsByClassName("textarea")

function changeCommentContent(){
    setNewCommentContent( event.target.value )
    console.log(event.target.value)
}

function addNewComment(){
    event.preventDefault()
    setCommentList(
    [...commentList, newCommentContent]
    )
    console.log(textarea.value)
    setNewCommentContent('')
}


    return (
        <article className={styles.post}>
            <header>
                    <div className={styles.author}>
                   { /* eslint-disable-next-line react/prop-types */}
                        <Avatar className="authorImage"src={author.avatarUrl} />

                                
                                
                                <div className={styles.authorInfo}>
                                        <strong className={styles.authorName}>{author.name}</strong>
                                        <span className={styles.authorProfession}>Programmer Student</span>
                                </div>
                    </div>

                <time title={dataDePublicacao.replace(',', ' às ')} dateTime={publishedAt.toISOString()}>{dateRelativeToNow}</time>
            </header>


            <div  key={123132}  className={styles.comment}>
                {content.map((line, index)=>{
                    if (line.type == "paragraph") {
                        return(<p key={index}>{line.content}</p>)
                    }   else if (line.type == "link"){
                        return(<p key={index}><a href="#">{line.content}</a></p>)
                    }
                    }
                )}
            </div>


                <form onSubmit={addNewComment} className={styles.commentForm}>
                    <strong>Deixe seu comentário aqui</strong>
                    <textarea onChange={changeCommentContent} placeholder='Clique aqui para comentar' value={newCommentContent} ></textarea>

                    <footer>
                    <button type='submit'>Enviar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {commentList.map((comment, index)=> 
                        {return <Comment content={comment} key={index}  />}
                        )
                    }
                </div>
        </article>
    )
}   