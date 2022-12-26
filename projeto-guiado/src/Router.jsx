import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './components/pages/Inicio'
import { Sobre } from './components/pages/Sobre'
import { Portfolio } from './components/pages/Portfolio'
import { Contato } from './components/pages/Contato' 
import { Footer } from './components/Footer'

export function ApplicationRoutes() {
    return(
       <BrowserRouter>
       <Menu />
       <Routes>
       <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
       </Routes>
       <Footer />
       </BrowserRouter>
    )
}