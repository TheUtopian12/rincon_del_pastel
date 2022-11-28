import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGOTÉ.png' className=''></img>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/Bebidas-Te/MANZANILLA.jpg' alt='manzanilla' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>Manzanilla</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Es un antinflamatorio, aivia los trastornos digestivos, incluyendo
                            indigestión, náuseas, pérdida del apetito.</span>
                    </div>

                    <div>
                        <img src='/Bebidas-Te/LIMÓN.jpg' alt='limón' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>Limón</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Fortalece el sistema inmunológico y respiratorio, favorece la digestión y funciones energéticas.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/Bebidas-Te/CHAI.jpg' alt='chai' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Chai</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Actúa como antiinflamatorio, evita las náuseas, mejora el metabolismo y tiene propiedades digestivas.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/Bebidas-Te/MIEL, JENGIBRE Y LIMÓN.jpg' alt='miel-jengibre-limón' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Miel, jengibre y limón</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Mejora la congestión de las vías respiratorias y de las fosas nasales, regula la temperatura corporal.</span>
                    </div>

                    <div>
                        <img src='/Bebidas-Te/ROJO.jpg' alt='rojo' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Rojo</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Aumenta la energía, reduce el estrés, ayuda en la digestión de comidas pesadas.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/Bebidas-Te/LAVANDA.jpg' alt='lavanda' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Lavanda</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Evita problemas gastrointestinales como cólicos, inflamacaión intestinal, además alivia el estrés y combe el insomnio.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
