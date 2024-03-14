import Link from "next/link"

import classes from './button.module.css'

const Button = (props) => {
    if (!props.link) {
        return <button {...props} className={classes.btn} >{props.children}</button>
    }

    return (
        <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
    )
}

export default Button