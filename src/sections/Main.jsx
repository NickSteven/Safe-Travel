import React from 'react'
import { artisans } from '../constants'
import mars from '../assets/mars.jpg'
import { MdPeopleAlt } from "react-icons/md";
import chart from '../assets/chart.png'



const Main = () => {

    return (
        <section className="flex justify-between gap-[30px] mr-10">
            <div className="flex flex-1 flex-col mt-3 ">
                <div className='px-3 py-3 rounded-xl  bg-white shadow-xl'>
                    <h1 className="font-bold text-2xl tracking-5">Liste des artisans</h1>
                    <h1 className='mt-2'>Aperçu des ateliers avec localisation et participants</h1>
                    <div className="flex justify-between mt-7 items-center mx-7">
                        <h1>Artisans</h1>
                        <h1>Ville</h1>
                        <h1>Total de participant</h1>
                    </div>
                </div>

                <div className='flex flex-col gap-[1px]'>
                    {artisans.map((item, index) => (
                        <div className="card hover:cursor-pointer bg-white flex justify-between items-center mt-2 py-5 rounded-xl shadow-md" key={index}>
                            <div className="flex items-center gap-2 px-3 py-3">
                                <img className='rounded-full' src={item.thumbnail} height={45} width={45} />
                                <div className='flex flex-col'>
                                    <p className='text-[13px] font-bold'>{item.name}</p>
                                    <p className='text-[11px] text-[#808080]'>{item.email}</p>
                                </div>

                            </div>
                            <div className='flex items-center'>
                                <h3 className="mr-10 font-bold">{item.ville}</h3>

                            </div>
                            <h3 className="mr-10">{item.total}</h3>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex flex-3 w-1/4 justify-between gap-3 flex-col mt-5">
                <div className="flex flex-col  bg-white rounded-lg px-3 py-3">
                    <div className="flex justify-between items-center ">
                        <h3>Mois</h3>
                        <div className='bg-[#bfa084] rounded-full px-3 py-3'>
                            <MdPeopleAlt color='white' />
                        </div>
                    </div>
                    <div>
                        <h1>Total d'artisans aidé</h1>
                        <h1 className="text-4xl font-bold text-[#bfa084]">70</h1>
                    </div>
                    <div className="flex items-center justify-between px-3">
                        <div className='text-[11px]'>
                            <div className="flex justify-between gap-1 items-center">
                                <div className="h-[10px] w-[15px] bg-[#bfa084] rounded-md"></div>
                                <p><span className='font-bold'>40% </span>Hommes</p>
                            </div>
                            <div className="flex justify-between gap-1 items-center">
                                <div className="h-[10px] w-[15px] bg-[#ded1c8] rounded-md"></div>
                                <p><span className='font-bold'>60% </span>Femmes</p>
                            </div>
                        </div>
                        <div>
                            <img src={chart} height={80} width={80} />
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg'>
                    <h3 className='px-3 py-3 text-[#bfa084] font-bold'>Artisan le plus réservée</h3>
                    <div className='flex flex-col'>
                        {artisans.map((item, index) => (
                            <div className="little-card hover:cursor-pointer rounded-md flex py-2 ml-3 mr-2 mb-1" key={index}>
                                <div className='border-[#f1a454] h-10 border-l-4'></div>
                                <img className="rounded-full ml-1" height={10} width={40} src={item.thumbnail} />
                                <div className='ml-2'>
                                    <div className='text-[12px] text-[#bfa084] font-bold'>{item.name}</div>
                                    <div className='text-[11px]'>{item.email}</div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>

    )
}

export default Main