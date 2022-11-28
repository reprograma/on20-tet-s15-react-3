import {Header} from '../Header/'
import contatoImg from '../assets/undraw_grand_slam_re_h0x4.svg'
import styles from '../styles/contato.module.css'
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'


export function Contato() {

    function handleCreateMessage(event) {
    event.preventDefault()
    const messageListRef = ref(database, 'mensagens')
    }

    return (
        <>
        <Header title="Entre em contato comigo"image={contatoImg}></Header>
        <div>
            <form className={styles.form}>
            <input className={styles.formInput} type="text" placeholder='Digite o seu nome' onSubmit={handleCreateMessage}/>
            <input className={styles.formInput} type="text" placeholder='Digite o seu e-mail' />
            <textarea className={styles.formTextarea} placeholder='Digite a sua mensagem'></textarea>
            <button className={styles.formButton} type="submit">Enviar mensagem</button>
            </form>
        </div>
        </>
    )
}