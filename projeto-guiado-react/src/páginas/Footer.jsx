import styles from '../styles/footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Feito por Fedra Portela, durante o projeto guiado de React.
            </p>
        </footer>
    )
}