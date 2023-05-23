import styles from "./Header.module.css"

import todoListLogo from "./../assets/logo.svg"

export function Header() {
    return (
       <header className={styles.header}>
            <div>
                <img src={todoListLogo} alt="" />
                <h1>
                    <strong>
                        <span>to</span>
                        <span>do</span>
                    </strong>
                </h1>
            </div>
       </header>
    )
}