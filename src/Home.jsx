import { NavLink } from "react-router-dom"
import styles from "./App.module.css"
import Card from "./Card"

export default function Home() {
    return (
        <>
            <h1 className={styles.header} >Movie app</h1>
            <p>Welcome to my app!</p>
            <NavLink to="/about"><button>About</button></NavLink>
            <hr />
            <Card title="The Shawshank Redemption" year="1994" director="Frank Darabont" />
            <Card title="Pulp Fiction" year="1994" director="Quentin Tarantino" />
        </>
    )
}