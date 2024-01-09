import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { RiBarChartFill } from "react-icons/ri";
import { IoAnalyticsOutline } from "react-icons/io5";

const Statistics = () => {
    return (
        <section className='mr-5'>
            <div className="flex justify-between mt-5 mr-5 items-center">
                <div className="px-10 py-3 bg-white rounded-lg shadow-sm">
                    <div className="flex gap-5 items-center">
                        <div className="bg-[#f4f4f4] rounded-full py-5 px-5">
                            <CiCalendar color='brown' fontSize={25} />
                        </div>
                        <div className="flex flex-col">
                            <h1>Date</h1>
                            <h1 className="text-xl text-[#bfa084] font-bold">10 NOV 2023</h1>

                        </div>
                    </div>
                </div>

                <div className="px-10 py-3 bg-white rounded-lg shadow-sm">
                    <div className="flex gap-5 items-center">
                        <div className="bg-[#f4f4f4] rounded-full py-5 px-5">
                            <RiBarChartFill color='brown' fontSize={25} />
                        </div>
                        <div className="flex flex-col">
                            <h1>Total de réservation</h1>
                            <h1 className="text-[#bfa084] text-xl font-bold">250</h1>

                        </div>
                    </div>
                </div>
                <div className="px-10 py-3 bg-[#bfa084] rounded-lg shadow-sm">
                    <div className="flex gap-5 items-center">
                        <div className="flex justify-between items-center">
                            <div className='flex flex-col text-white'>
                                <h1>Chiffres d'affaires</h1>
                                <h1 className='font-bold text-xl'>55.50€</h1>
                            </div>
                            <div className="py-5 px-5">
                                <IoAnalyticsOutline color='white' fontSize={25} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Statistics