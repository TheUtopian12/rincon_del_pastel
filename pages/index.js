import Link from "next/link"
import Banners from "../components/Banners"
export default function Home() {
  return (
    <div>
      <div className='bg-[#EBFFF7] text-[#03989E] flex justify-between pl-5 pr-5 items-center' >
        <img src='/El rincón del pastel.png' alt='Logo' className='w-[200px]' />
        <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-xl font-bold">
          <div>
            <ul className='flex gap-5'>
              <li> <Link href={'/'}>Inicio</Link > </li>
              <li><Link href={'/menu'}>Menú</Link></li>
              <li><Link href={'/promociones'}>Ofertas</Link></li>
              <li><Link href={'/sabiasQue'}>Sabias que..</Link></li>
            </ul>
          </div>
        </span>

      </div>

      <Banners/>
    
      <div className='bg-[#EBFFF7] text-[#A5E6E2] pt-[20px] w-[200px] xl:w-[100%]'>

        <div className='flex justify-items-end border-dashed border-4 border-[#e88f8f]'>
          <img src='/3.jpg' alt='MVP-3' className='rounded-full border-solid border-8 border-[#FCD9E8] w-[300px] m-4' />

          <div className='text-[#4FB1AB] md:flex-1 text-center' >
            <span style={{ fontFamily: 'Allura, cursive' }} className=' text-[50px]'> Misión </span>
            <div className='font-light pr-20'>
              <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl text-black text-left pl-20 ">
                Lograr que cada uno de nuestros clientes viva una experiencia única y diferente,
                brindándoles un servicio y productos de calidad, en una atmosfera agradable.</span>
            </div>
          </div>
        </div>

        <div className='flex justify-items-end'>
          <img src='/1.jpg' alt='MVP-1' className=' rounded-full border-solid border-8 border-[#FCD9E8] w-[300px] m-4' />
          <div className='text-[#4FB1AB] md:flex-1 text-center'>
            <span style={{ fontFamily: 'Allura, cursive' }} className='text-[50px]'> Visión</span>
            <div className="pr-20">
              <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl text-black text-left pl-20">
                Convertirnos en la cafetería con la mejor repostería
                y pastelería con mayor prestigio en el Estado de Zacatecas, con una identidad reconocible.</span>
            </div>
          </div>
        </div>

        <div className='flex justify-items-center border-dashed border-4 border-[#e88f8f]'>
          <img src='/2.jpg' alt='MVP-2' className=' rounded-full border-solid border-8 border-[#FCD9E8] mt-20 mb-20 ml-4 w-[300px]' />
          <div className='text-[#4FB1AB] md:flex-1 text-center'>
            <span style={{ fontFamily: 'Allura, cursive' }} className='text-[50px]'> Políticas</span>
            <div>
              <ul className='text-left pl-20'>
                <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl text-black">
                  <li>•	El cliente es primero.</li>
                  <li>•	Ofrecer un trato amable a todos los clientes</li>
                  <li>•	Estar dispuesto a escuchar las quejas y sugerencias de los clientes</li>
                  <li>•	La humildad, el respeto, el amor y la solidaridad en nuestro negocio, es fundamental.</li>
                  <li>•	En El Rincón Del Pastel acogemos a cada uno de nuestros empleados.</li>
                  <li>•	Tener certeza de que nuestros productos serán 100% ecofriendly.</li>
                  <li>•	Se garantiza que la elaboración de bebidas y alimentos esta supervisada en todo momento y se realizara bajo una serie de normas de higiene.</li>
                  <li>•	Presentar al cliente el menú de bebidas y pasteles con los precios claramente diferenciados.</li>
                </span>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex pt-[40px]'>

          <div className='basis-1/3 border-solid border-2 border-[#03989E] text-center text-[#03989E] h-[300px]'>
            <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl font-bold" > Horarios </span>
            <div className="pt-[10px] text-xl font-bold">Lunes a viernes 10 am 9pm</div>
            <div className="pt-[10px] text-xl font-bold">Sábado 8am 11pm</div>
            <div className="pt-[10px] text-xl font-bold">Domingo 12 pm 7 pm</div>
          </div>
          <div className='basis-1/3 border-solid border-2 border-[#03989E] text-center text-[#03989E]'>
            <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl font-bold"  > Encuentranos en:</span>
            <div className="pt-[10px] text-xl font-bold">Sierra Nevada , Zona A, Colinas del Padre, 98090 Zacatecas, Zac.</div>
          </div>
          <div className='basis-1/3 border-solid border-2 border-[#03989E] text-center text-[#03989E]'>
            <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-3xl font-bold pb-10" > Síguenos </span>
            <div className="">
              <div className="grid justify-items-center pb-10">
                <button><Link href={'https://www.instagram.com/elri.ncondelpastel/?igshid=YmMyMTA2M2Y%3D'}><img src="/instagram.png" alt="instagram" className="w-[70px] pt-10"></img></Link></button>
              </div>
              <div className=" grid justify-items-center">
                <button><Link href={'https://www.facebook.com/profile.php?id=100087886170567'}><img src="/facebook.png" alt="facebook" className="w-[70px] rounded-full border-solid"></img></Link></button>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

