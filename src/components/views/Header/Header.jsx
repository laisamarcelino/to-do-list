import React from 'react'
import {StylesHeader} from '../Header/header.styles'
import logo from '/list-checks.svg'
import icon_search from '/magnifying-glass.svg'

const Header = () => {
    return (
        <StylesHeader className={"header"}>
            <nav className={"nav-bar"}>
                <div className='align-logo'>
                    <img className='logo' src={logo} alt="icone de tarefas feitas, logo do site" />
                    <p>TO-DO LIST</p>
                </div>
                <div className={"search-bar"}>
                    <form action="/">
                        <input type="text" id="search-task" name="search-task" className={"form"} placeholder="Buscar tarefa"/> 
                    </form>
                    <button className='search-button'><img src={icon_search} alt="imagem de uma lupa para pesquisa" /></button>
                </div>
            </nav>
        </StylesHeader>
    )
}

export default Header