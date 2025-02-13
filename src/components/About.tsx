import { ABOUT_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'
import aboutNft from '../../public/assets/images/about-nft.webp'
import Heading from './common/Heading'

function About() {
    return (
        <div className='px-4 relative pt-[189px] pb-[272px] max-xl:pb-16 max-xl:pt-24 max-md:py-16 max-w-[1920px] mx-auto'>
            <div className='container mx-auto flex max-xl:flex-col max-lg:gap-8'>
                <div className='relative z-10'>
                <Heading text='About Us' headingSpan='About Us'/>
                    {ABOUT_LIST.map((item, i) => (
                        <div key={i} className='flex gap-5 items-baseline mt-2'>
                            <div className='max-w-[29px] w-full h-[29px] bg-gradient-to-b from-light-purple via-light-pink to-light-orange rounded-full flex items-center justify-center'>{item.icon}</div>
                            <p className='xl:max-w-[510px]  text-white'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <Image className=' max-w-[954px] xl:absolute top-[52px] right-0 w-full mx-auto' src={aboutNft} alt="about img" />
            </div>
        </div>
    )
}

export default About