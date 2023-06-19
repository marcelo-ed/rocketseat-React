import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                    <div className={styles.author}>
                            
                            <img className={styles.authorImage} src="https://github.com/marcelo-ed.png" />
                            
                            
                            <div className={styles.authorInfo}>
                                    <strong className={styles.authorName}>Marcelo</strong>
                                    <span className={styles.authorProfession}>Programmer Student</span>
                            </div>
                    </div>

                <time title='09/06/2023' dateTime='09-06-2023 às 14:34'> publicado há 3 meses</time>
            </header>

            <div className={styles.comment}>
                    <p>Não sei exatamente o que colocar nesse comentário, então vou colocar algumas frases aleatórias que achar no google.</p>
                    <p>Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.</p>
                    <p>Um ato aleatório de bondade, por menor que seja, pode ter um tremendo impacto na vida de outra pessoa.</p>
                    <p>O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.</p>
                    <p>A vida é um processo aleatório de incertezas que dependem do tempo. E o tempo? É uma máquina de estágios finitos composta por elementos interdependentes. Ou talvez seja apenas uma ilusão, e na verdade tudo ocorre simultaneamente e, portanto, estamos apenas parados em um ponto específico pensando que algo está mudando. <a href="../index.html"> #reflexões</a></p>
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