import { ABOUT_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'
import aboutNft from '../../public/assets/images/about-nft.webp'

function About() {
    return (
        <div className='px-4 relative pt-[189px] pb-[272px] max-xl:py-16 max-md:py-0'>
            <div className='container mx-auto flex max-xl:flex-col gap-5'>
                <div className='relative z-10'>
                    <div className="relative">
                        <h2 className="mt-8 text-5xl font-black text-white tracking-[6px] relative z-10 leading-custom-md max-md:text-4xl max-md:mt-20 ">
                            About Us
                        </h2>
                        <span className="absolute inset-0 text-5xl max-md:text-4xl leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[6px] top-[-3%]">
                            About Us
                        </span>
                    </div>
                    {ABOUT_LIST.map((item, i) => (
                        <div key={i} className='flex gap-5 items-baseline mt-2'>
                            <div className='max-w-[29px] w-full h-[29px] bg-gradient-to-b from-light-purple via-light-pink to-light-orange rounded-full flex items-center justify-center'>{item.icon}</div>
                            <p className='xl:max-w-[510px]  text-white'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <Image className=' max-w-[954px] xl:absolute top-0 right-0 w-full mx-auto' src={aboutNft} alt="about img" />
            </div>
        </div>
    )
}

export default About