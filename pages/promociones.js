import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import BannersPromociones from '../components/BannersPromociones'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className='bg-[#EBFFF7] text-[#03989E] flex justify-between pl-5 pr-5 items-center' >
        <img src='/El rincón del pastel.png' alt='Logo' className='w-[200px]' />
        <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-xl font-bold">
          <div >
            <ul className='flex gap-5'>
              <li> <Link href={'/'}>Inicio</Link > </li>
              <li><Link href={'/menu'}>Menú</Link></li>
              <li><Link href={'/promociones'}>Ofertas</Link></li>
              <li><Link href={'/sabiasQue'}>Sabias que..</Link></li>
            </ul>
          </div>
        </span>
      </div>

      <div className='grid justify-items-center border-4 border-[#03989E] text-[#077F83] bg-cover bg-no-repeat bg-center bgPromociones h-[250px]'>
        <div className='pt-[70px]'> <span style={{ fontFamily: 'Allura, cursive' }} className='font-bold text-[60px] pt-10'> Promociones</span></div>
      </div>

      <BannersPromociones/>
      <div className='mt-10 bg-[FAEFEC]'> </div>
      <div className='pt-10 pb-10'></div>

      <div className=' border-dashed border-4 border-[#E88F8F] bg-[#FAEFEC]'>
        <div className='pt-20 pb-20'></div>
      </div>

      <div className='mt-10 bg-[FAEFEC]'> </div>
      <div className='pt-10 pb-10'></div>

      <div className=' border-dashed border-4 border-[#03989E] bg-[#EBFFF7]'>
        <div className='pt-20 pb-20'></div>
      </div>

      <div className='mt-10 bg-[FAEFEC]'> </div>
      <div className='pt-10 pb-10'></div>

      <div className=' border-dashed border-4 border-[#E88F8F] bg-[#FAEFEC]'>
        <div className='pt-20 pb-20'></div>
      </div>

    </div>
  )
}