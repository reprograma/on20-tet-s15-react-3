import { useState } from 'react'
import { Header } from '../Header'
import contatoImg from './imagens/contato.svg'

import styles from './styles/pages/contato.module.css'


export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
  
    function handleInputValueNome(event) {
      setNome(event.target.value)
    }
  
    function handleInputValueEmail(event) {
      setEmail(event.target.value)
    }
  
    function handleInputValueMensagem(event) {
      setMensagem(event.target.value)
    }
  
    function handleCreateMessage(event) {
      event.preventDefault()
      
      const messageListRef = ref(database, 'mensagens') //criei minha coleção
      const newMessageRef = push(messageListRef) //nova mensagem vai para dentro da coleção mensagens
      set(newMessageRef, {  //criando cada mensagem que vai ser salva
        nome: nome,
        email: email,
        texto: mensagem
      })
  
    }
  
    return(
      <>
        <Header title="Chama no contatinho" image={contatoImg} />
        <div>
          <form className={styles.form} onSubmit={handleCreateMessage}>
            <input 
              className={styles.formInput} 
              placeholder="Digite seu nome" 
              onChange={handleInputValueNome}
            />
            <input 
              className={styles.formInput} 
              placeholder="Digite seu email"
              onChange={handleInputValueEmail}
            />
            <textarea 
              className={styles.formTextArea} 
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <button type="submit" className={styles.formButton}>Enviar mensagem</button>
          </form>
        </div>
      </>
    )
  }