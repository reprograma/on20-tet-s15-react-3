import styles from './pages/styles/components/footer.module.css'


export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Feito por Gisele Fragoso, durante o projeto guiado no modulo react
            </p>
        </footer>
    )
}