import React from 'react'
import Header from "../../components/views/Header/Header"
import GeneralTasks from '../../components/views/GeneralTasks/GeneralTasks'
import Footer from '../../components/views/Footer/Footer'

const LandingPage = () => {
    return (
        <div>
           <Header/>
           <GeneralTasks/>
           <Footer/>
        </div>
    )
}

export default LandingPage