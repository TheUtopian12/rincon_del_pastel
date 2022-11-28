import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/Logo Pasteles.png'></img>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PASTELES/VAINILLA.jpg' alt='vainilla' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>Vainilla</span><span className='font-light text-gray-600 text-2xl'>/ $40</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PASTELES/CHOCOLATE.jpg' alt='chocolate' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>Chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $50</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES PASTELES/MARMOLEADO.jpg' alt='marmoleado' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Marmoleado</span><span className='font-light text-gray-600 text-2xl'>/ $55</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PASTELES/RED VELVET.jpg' alt='redVelvet' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Red Velvet</span><span className='font-light text-gray-600 text-2xl'>/ $50</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PASTELES/ZANAHORIA.jpg' alt='xanahoria' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Zanahoria</span><span className='font-light text-gray-600 text-2xl'>/ $60</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES PASTELES/MANTEQUILLA LIMON.jpg' alt='mantequillaLimon' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Limón</span><span className='font-light text-gray-600 text-2xl'>/ $50</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES PASTELES/CARAMELO.jpg' alt='caramelo' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Caramelo</span><span className='font-light text-gray-600 text-2xl'>/ $55</span>
                    </div>

                    <div>
                        <img src='/IMAGENES PASTELES/PASTEL CCONFETI.jpg' alt='confeti' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Arcoiris</span><span className='font-light text-gray-600 text-2xl'>/ $55</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES PASTELES/CHOCOLATE Y MENTA.jpg' alt='chocolateMenta' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate y menta</span><span className='font-light text-gray-600 text-2xl'>/ $60</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
