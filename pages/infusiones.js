import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGO INFUSIONES.png' className=''></img>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/INFUSIONES/FRAMBUESA Y MENTA.jpg' alt='frambuesa' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>Frambuesa y menta</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                    </div>

                    <div>
                        <img src='/INFUSIONES/SANDIA Y ALBAHACA.jpg' alt='sandiayalbahaca' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>Sandia y albahaca</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/INFUSIONES/FRESA Y KIWI.jpg' alt='fresaKiwiLimon' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Fresa, kiwi y limón</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/INFUSIONES/Piña y coco.jpg' alt='piñaCoco' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Piña y coco</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                    </div>

                    <div>
                        <img src='/INFUSIONES/Naranja y moras.jpg' alt='naranjaMoras' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Naranja y moras</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/INFUSIONES/Toronja y romero.jpg' alt='toronjaRomero' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Toronja y romero</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
