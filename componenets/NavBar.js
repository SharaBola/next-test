import Link from "next/link";
import styles from '../styles/NavBar.module.css'
export default function NavBar({text, href}) {
    return (
        <Link className={"Link"} href={href}>{text}</Link>
    )
}
