import React from 'react'
import {StylesHeader} from './header.styles'
import icon_list from '/list.svg'
import icon_search from '/magnifying-glass.svg'

const Header = () => {
    return (
        <StylesHeader className={"header"}>
            <nav className={"nav-bar"}>
                <button className={"nav-button"}><img src={icon_list} alt="barras horizontais para navegação de menu" /></button>
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