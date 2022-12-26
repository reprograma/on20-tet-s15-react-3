import { Header } from '../Header'
import sobreImg from './imagens/sobre.svg'
import giImg from './imagens/gi.jpg'

import styles from '../pages/styles/pages/sobre.module.css'

export function Sobre() {
    return(
        <>
        <Header title="Sobre mim" image= {sobreImg} />
                <div className={styles.sobreContainer}>
                <img className={styles.bioImage} src={giImg} />
                <div className={styles.bioContainer}>
                <h2 className={styles.bioTitle}>Gisele Fragoso, prazer!!</h2>
            <p className={styles.bioText}>Me chamo Gisele Fragoso tenho 29 anos , moro na cidade em Salvador e sou aluna da turma On20 da reprogama</p>
        </div>
        </div>
        </>
        
    )
}