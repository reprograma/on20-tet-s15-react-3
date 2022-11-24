import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './Menu'
import { Inicio } from './Inicio'
import { Sobre } from './páginas/Sobre'
import { Portfolio } from './páginas/Portfolio'
import {Contato} from './páginas/Contato'
import { Footer } from './páginas/Footer'

export function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="Sobre" element={<Sobre />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contato" element={<Contato />}>Contato</Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
    )
}