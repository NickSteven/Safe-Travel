import React from 'react'

const Top = () => {
    return (
        <>
            <div className="flex justify-between items-center mr-5">
                <div className="flex flex-1 flex-col">
                    <p>Hi Safe Travels</p>
                    <h3 className="text-2xl text-[#bfa084]">Bienvenue sur notre dashboard</h3>
                </div>
                <div className="mr-5">

                    <input className="rounded-md py-2 px-5" placeholder="Search" type="text" />
                </div>
            </div>
        </>
    )
}

export default Top