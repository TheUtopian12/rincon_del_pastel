import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='grid justify-items-center'>
                <img src='/LOGOBEBIDASCALIENTES.png' className=''></img>
                <span className='text-2xl font-bold text-cyan-900'>RECUERDA QUE CUALQUIERA DE LAS BEBIDAS CALIENTES LAS PUEDES PEDIR EN FRÍO</span>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/AMERICANO.jpg' alt='americano' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold text-center'>AMERICANO</span><span className='font-light text-gray-600 text-2xl'>/ $35 $40</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>Espresso diluido en agua caliente.</span>
                    </div>

                    <div>
                        <img src='/BebidasCalientes/CAPUCCINO.jpg' alt='capuccino' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold '>CAPUCCINO</span><span className='font-light text-gray-600 text-2xl'>/ $40 $55</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Preparada con café expreso y leche montada con vapor para darle cremosidad.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/BebidasCalientes/CAPUCCINO SABOR.jpg' alt='capuccinoSabor' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>CAPUCCINO SABOR</span><span className='font-light text-gray-600 text-2xl'>/ $55 $60</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Preparada con café expreso y leche montada con vapor para darle cremosidad.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/ESSPRESO.jpg' alt='espresso' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>ESPRESSO</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Café molido de una manera muy fina, diluido con una determinada cantidad de agua cuya temperatura es cercana al punto de ebullición.</span>
                    </div>

                    <div>
                        <img src='/BebidasCalientes/ESSPRRESO DOBLE.jpg' alt='espresso-doble' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Espresso Doble</span><span className='font-light text-gray-600 text-2xl'>/ $62 $67</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Su preparación consiste en dos cafés espresso en la taza de cappuccino</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/BebidasCalientes/LATTE.jpg' alt='latte' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>LATTE</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Preparado con uno o dos shots de espresso con leche al vapor y una fina capa de leche espumosa encima</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/CARAJILLO.jpg' alt='carajillo' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Carajillo</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Consiste en una mezcla de café expresso con brandy o ron.</span>
                    </div>

                    <div>
                        <img src='/BebidasCalientes/IRLANDES.jpg' alt='cafe-irlandes' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Café Irlandes</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Contiene una exquisita combinación de whisky, azúcar, café y crema de leche.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/BebidasCalientes/DALGONA.jpg' alt='cafe-dalgona' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Café Dalgona</span><span className='font-light text-gray-600 text-2xl'>/ $50 $55</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Se elabora batiendo proporciones iguales de café en polvo, azúcar y agua caliente hasta formar una crema o espuma.</span>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className='pl-10'>
                        <img src='/BebidasCalientes/AFFOGATO.jpg' alt='cafe-affogato' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4 '></img>
                        <span className='text-black text-2xl font-bold'>Café Affogato</span><span className='font-light text-gray-600 text-2xl'>/ $60 $65</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Hecho con dos ingredientes principales, helado de vainilla y café espresso.</span>
                    </div>

                    <div>
                        <img src='/BebidasCalientes/CHOCOLATE CALIENTE.jpg' alt='chocolate' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate</span><span className='font-light text-gray-600 text-2xl'>/ $50 $60</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Preparado con cacao en polvo disuelta en leche.</span>
                    </div>

                    <div className='pr-10'>
                        <img src='/BebidasCalientes/CHOCOLATE BLANCO.jpg' alt='chocolate-blanco' className='rounded-full border-solid border-8 border-[#03989E] w-[250px] h-[250px] m-4'></img>
                        <span className='text-black text-2xl font-bold'>Chocolate Blanco</span><span className='font-light text-gray-600 text-2xl'>/ $50 $60</span>
                        <span className='text-black flex text-2xl text-justify pr-20'>
                            Combinación de salsa de chocolate blanco con leche vaporizada y decorada con crema batida.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
