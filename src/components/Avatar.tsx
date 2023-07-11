// eslint-disable-next-line no-unused-vars
import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

/* eslint-disable react/prop-types */

export function Avatar({className, ...props}: ImgHTMLAttributes<HTMLImageElement>){
    const avatarClassName = className == "authorImage" ? styles.authorImage : styles.avatar
    return(
        <img 
        className={avatarClassName} 
        {...props}
        />
    )
}