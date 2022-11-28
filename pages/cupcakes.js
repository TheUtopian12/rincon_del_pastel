import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGO CUPCAKES.png' className=''></img>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES CUPCAKES/CHOCOLATE.jpg' alt='chocolate' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>Chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div>
                        <img src='/IMAGENES CUPCAKES/VAINILLA LIMÓN.jpg' alt='limón' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>Limón</span><span className='font-light text-gray-600 text-2xl'>/ $20</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES CUPCAKES/NUEZ.jpg' alt='nuez' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Nuez</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES CUPCAKES/CONFFETI.jpg' alt='conffeti' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Conffeti</span><span className='font-light text-gray-600 text-2xl'>/ $20</span>
                    </div>

                    <div>
                        <img src='/IMAGENES CUPCAKES/PLATANO.jpg' alt='platano' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Platano</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES CUPCAKES/RED VELVET.jpg' alt='redVelvet' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Red Velvet</span><span className='font-light text-gray-600 text-2xl'>/ $20</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/IMAGENES CUPCAKES/CARAMELO.jpg' alt='Caramelo' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Caramelo</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div>
                        <img src='/IMAGENES CUPCAKES/LAVANDA.jpg' alt='lavanda' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Lavanda</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/IMAGENES CUPCAKES/COCO.jpg' alt='coco' className='rounded-full border-solid border-8 border-[#E88F8F] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Coco</span><span className='font-light text-gray-600 text-2xl'>/ $25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
