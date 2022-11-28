import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGO PANQUES.png' className=''></img>
            </div>
            <div>
                <div className='grid grid-cols-3 justify-items-center mt-10 mb-10 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PANQUES/NARANJA.jpg' alt='naranja' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>Naranja</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PANQUES/LIMON.jpg' alt='limón' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>Limón</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES PANQUES/PLATANO Y CHISPAS.jpg' alt='platanoChocolate' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Plátano y chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $30</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-center mb-10 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PANQUES/MORAS.jpg' alt='moras' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Mora azul</span><span className='font-light text-gray-600 text-2xl'>/ $40</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PANQUES/CHOCOLATE.jpg' alt='chocolate' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $35</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES PANQUES/FRESA.jpg' alt='frutos Rojos' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Frutos Rojos</span><span className='font-light text-gray-600 text-2xl'>/ $40</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 justify-items-center mb-10 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PANQUES/NAPOLITANO.jpg' alt='marmoleado' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Marmoleado</span><span className='font-light text-gray-600 text-2xl'>/ $35</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PANQUES/COCO.jpg' alt='coco' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Coco</span><span className='font-light text-gray-600 text-2xl'>/ $35</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES CUPCAKES/NUEZ.jpg' alt='nuez' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Nuez</span><span className='font-light text-gray-600 text-2xl'>/ $35</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
