// eslint-disable-next-line no-unused-vars
import styles from './Avatar.module.css'

/* eslint-disable react/prop-types */
export function Avatar({className, src}){
    return(
        <img className={(className == 'authorImage' ) ?  styles.authorImage : styles.avatar } src={src}  />

    )
}