// eslint-disable-next-line no-unused-vars
import styles from './Avatar.module.css'

/* eslint-disable react/prop-types */
export function Avatar(props){
    return(
        <img className={props.className} src={props.src}  />
    )
}