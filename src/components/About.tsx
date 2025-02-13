import { ABOUT_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'
import aboutNft from '../../public/assets/images/about-nft.webp'
import Heading from './common/Heading'

function About() {
    return (
        <div className='relative pt-[189px] pb-[272px] max-xl:pb-16 max-xl:pt-24 max-md:py-16 max-w-[1920px] mx-auto'>
            <div className='xl:container mx-auto flex max-xl:flex-col max-lg:gap-8'>
                <div className='max-xl:container relative z-10 px-4'>
                    <Heading text='About Us' headingSpan='About Us' />
                    <div className='mt-7 gap-3 flex flex-col max-lg:mt-5 max-sm:mt-[35px]'>
                    {ABOUT_LIST.map((item, i) => (
                        <div key={i} className='flex gap-5 items-start'>
                            <div className='max-w-[29px] w-full h-[29px] bg-gradient-to-b from-light-purple via-light-pink to-light-orange rounded-full flex items-center justify-center'>{item.icon}</div>
                            <p className='xl:max-w-[510px]  text-white'>{item.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <Image className=' max-w-[954px] xl:absolute max-xl:max-w-full top-[52px] right-0 w-full' src={aboutNft} alt="about img" />
            </div>
        </div>
    )
}

export default About