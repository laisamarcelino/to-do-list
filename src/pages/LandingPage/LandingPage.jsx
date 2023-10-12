import React from 'react'
import Header from "../../components/views/Header/Header"
import GeneralTasks from '../../components/views/GeneralTasks/GeneralTasks'
import DoneTasks from '../../components/views/DoneTasks/DoneTasks'
import Footer from '../../components/views/Footer/Footer'


const LandingPage = () => {
    return (
        <div>
           <Header/>
           <GeneralTasks/>
           <DoneTasks/>
           <Footer/>
        </div>
    )
}

export default LandingPage