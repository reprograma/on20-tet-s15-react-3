import { Link } from 'react-router-dom'
import styles from './styles/ menu.module.css'

export function Menu (){
	return(
	 <ul className={styles.menuContainer}>
	     <li>
	         <Link to= "/">Home</Link>
	     </li>
	     <li>
	         <Link to= "/sobre">Sobre</Link>
	     </li>
	     <li>
	         <Link to= "/portfolio">Portfolio</Link>
	     </li>
	     <li>
	         <Link to= "/contato">Contato</Link>
	     </li>
	   </ul>
	)
}