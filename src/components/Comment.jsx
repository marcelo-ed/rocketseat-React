import styles from 'Comment.module.css'

export function Comment(){
    return(


        <div className={styles.Comment}>
            
        <div className={styles.commentBox}>

            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>marcelo-ed</strong>
                        <time title='12 de julho de 2023, às 15:58' dateTime='12-06-2023 15:58'> Há 1 hora </time>
                    </div>
                </header>

                <p>Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.</p>
            </div>

        </div>


        <footer>Footer</footer>
        </div>
    )
}