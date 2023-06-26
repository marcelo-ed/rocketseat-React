/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Comment } from './Comment'
import {Avatar} from    './Avatar'
import styles from './Post.module.css'
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";




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
    return (
        <article className={styles.post}>
            <header>
                    <div className={styles.author}>
                   { /* eslint-disable-next-line react/prop-types */}
                        <Avatar className="authorImage"src={author.avatarUrl} />

                                
                                
                                <div className={styles.authorInfo}>
                                        <strong className={styles.authorName}>Marcelo</strong>
                                        <span className={styles.authorProfession}>Programmer Student</span>
                                </div>
                    </div>

                <time title={dataDePublicacao.replace(',', ' às ')} dateTime={publishedAt.toISOString()}>{dateRelativeToNow}</time>
            </header>

            <div className={styles.comment}>
                {content.map(line=>{
                    if(line.type == "paragraph") {
                        return(<p>{line.content}</p>)
                    }   else if(line.type == "link"){
                        return(<p><a href="#">{line.content}</a></p>)
                    }
                    }
                )}
            </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu comentário aqui</strong>
                    <textarea placeholder='Clique aqui para comentar' ></textarea>

                    <footer>
                    <button type='submit'>Enviar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
        </article>
    )
}