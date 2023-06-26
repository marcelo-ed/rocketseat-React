// eslint-disable-next-line no-unused-vars
import styles from './Avatar.module.css'

/* eslint-disable react/prop-types */
export function Avatar({className, src}){
    const avatarClassName = className == "authorImage" ? styles.authorImage : styles.avatar
    return(
        <img src={src} className={avatarClassName} />
    )
}