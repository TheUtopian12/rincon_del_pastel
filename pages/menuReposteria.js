import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[#EBFFF7]'>
      <div className='bg-[#EBFFF7] text-[#03989E] flex justify-between pl-5 pr-5 items-center' >
        <img src='/LOGO EL RINCON DEL PASTEL.png' alt='Logo' className='w-[200px]' />
        <span style={{ fontFamily: 'Exo 2, sans-serif' }} className="text-xl font-bold">
          <div >
            <ul className='flex gap-5'>
              <li><Link href={'/'}>Inicio</Link></li>
              <li><Link href={'menu'}>Menú</Link></li>
              <li><Link href={'/promociones'}>Ofertas</Link></li>
              <li><Link href={'/sabiasQue'}>Sabias que..</Link></li>
            </ul>
          </div>
        </span>
      </div>

      <div className='grid justify-items-center mt-10 border-4 border-[#03989E] text-[#E88F8F] bg-cover bg-no-repeat bg-center bgMenu h-[250px]'>
        <div>
          <span style={{ fontFamily: 'Allura, cursive' }} className='font-bold text-[50px] '> Repostería</span></div>
      </div>

      <div className='grid justify-items-center mt-10 border-dashed border-4 border-[#E88F8F] text-[#E88F8F] bg-[#FAEFEC]'>
        <img src='/cupcakes.jpeg' alt='Reposteria' className='rounded-full border-solid border-8 border-[#E88F8F] center w-[300px] mt-10'></img>
        <div className='pt-10 pb-10'>
          <span style={{ fontFamily: 'Allura, cursive' }} className='font-bold text-[50px]'><Link href={'/cupcakes'}>Cupcakes</Link></span>
        </div>
      </div>

      <div className='grid justify-items-center mt-10 border-dashed border-4 border-[#03989E] text-[#03989E] bg-[#EBFFF7]'>
        <img src='/panques.jpeg' alt='BebidasCal' className='rounded-full border-solid border-8 border-[#03989E] center w-[300px] mt-10'></img>
        <div className='pt-10 pb-10'>
          <span style={{ fontFamily: 'Allura, cursive' }} className='font-bold text-[50px]'><Link href={'/panques'}>Panques</Link></span></div>
      </div>

      <div className='grid justify-items-center mt-10 border-dashed border-4 border-[#E88F8F] text-[#E88F8F] bg-[#FAEFEC]'>
        <img src='/pasteles.jpg' alt='BebFria' className='rounded-full border-solid border-8 border-[#E88F8F] center w-[300px] mt-10'></img>
        <div className='pt-10 pb-10'>
          <span style={{ fontFamily: 'Allura, cursive' }} className='font-bold text-[50px]'><Link href={'/pasteles'}>Pasteles</Link></span></div>
      </div>

    </div>
  )
}