import React from 'react'
import Nav from '../components/Nav'
import Top from '../sections/Top'
import Statistics from '../sections/Statistics'
import Main from '../sections/Main'



const Dashboard = () => {
    return (
        <main className="min-h-screen bg-[#f4f4f4]">

            <div className="flex gap-10 pt-1">
                <Nav />
                <div className="flex-1 pt-3">
                    <Top />
                    <Statistics />
                    <Main />
                </div>
            </div>
        </main>
    )
}

export default Dashboard