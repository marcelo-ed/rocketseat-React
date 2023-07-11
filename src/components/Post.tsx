/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Comment } from './Comment'
import {Avatar} from    './Avatar'
import styles from './Post.module.css'
import { formatDistanceToNow } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: {
        name: string;
        office: string;
        avatarUrl: string;
    };
    content: Content[];
    publishedAt: Date;
}

    /* eslint-disable-next-line react/prop-types */
export function Post({ author,  publishedAt, content  }: PostProps){
    const dataDePublicacao = new Intl.DateTimeFormat('pt-BR', {
        day:   '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    const [likeCount, setLikeCount] = useState(0)

    const dateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [commentList, setCommentList] = useState([
        "comentário"
    ])

    const [newCommentContent, setNewCommentContent] = useState("")


    function handleChangeCommentContent(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentContent( event.target.value )
    }

    function handleAddNewComment(event: FormEvent){
        event.preventDefault()

        setCommentList(
        [...commentList, newCommentContent]
        )
        setNewCommentContent('')
    }

    function deleteComment(commentToDelete: string){
        const commentListAfterTheDeletion = commentList.filter(comment=>{
            return (comment !== commentToDelete) 
        })
        setCommentList(commentListAfterTheDeletion)
    }

    function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    const isNewCommentContentEmpty = newCommentContent.length == 0

    return (
        <article className={styles.post}>
            <header>
                    <div className={styles.author}>
                   { /* eslint-disable-next-line react/prop-types */}
                        <Avatar className="authorImage"src={author.avatarUrl} alt="Foto de perfil" />

                                
                                
                                <div className={styles.authorInfo}>
                                        <strong className={styles.authorName}>{author.name}</strong>
                                        <span className={styles.authorProfession}>Programmer Student</span>
                                </div>
                    </div>

                <time title={dataDePublicacao.replace(',', ' às ')} dateTime={publishedAt.toISOString()}>{dateRelativeToNow}</time>
            </header>


            <div className={styles.comment}>
                {content.map((line, index)=>{
                    if (line.type == "paragraph") {
                        return(<p key={index} >{line.content}</p>)
                    }   else if (line.type == "link"){
                        return(<p key={index} ><a href="#">{line.content}</a></p>)
                    }
                    }
                )}
            </div>


                <form onSubmit={handleAddNewComment} className={styles.commentForm}>
                    <strong>Deixe seu comentário aqui</strong>
                    <textarea 
                    onChange={handleChangeCommentContent} 
                    placeholder='Clique aqui para comentar' 
                    value={newCommentContent}
                    required
                    onInvalid={handleInvalidNewComment}
                    ></textarea>

                    <footer>
                    <button disabled={isNewCommentContentEmpty} type='submit'>Enviar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {commentList.map((comment, index)=> 
                        {return (
                        <Comment  
                        key={index}
                        commentContent={comment} 
                        deleteComment={deleteComment}  
                        />
                        )
                    })}
                </div>
        </article>
    )
}   