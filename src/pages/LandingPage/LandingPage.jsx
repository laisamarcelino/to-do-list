import React from 'react'
import Header from "../../components/views/Header/Header"
import SearchTask from '../SearchTask/SearchTask'
import GeneralTasks from '../GeneralTasks/GeneralTasks'
import Footer from '../../components/views/Footer/Footer'



const LandingPage = () => {
    return (
        <div>
           <Header/>
           <SearchTask/>
           <GeneralTasks/>
           <Footer/>
        </div>
    )
}

export default LandingPage