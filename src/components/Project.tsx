import React from 'react'
import Image from 'next/image';
import { PROJECTS_LIST } from '@/utils/helper';
import Heading from './common/Heading';

const Project = () => {
    return (
        <div className="px-4 pt-[130px] max-lg:pt-[140px] max-md:pt-[67px]">
            <div className="container flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10">
                <div className="w-6/12 max-lg:w-full">
                    <Heading text='THE PROJECT' headingSpan='THE PROJECT' />
                    <div className="pt-[21px] max-w-[505px] max-lg:max-w-full gap-2 flex flex-col">
                        {PROJECTS_LIST.map((obj, i) => (
                            <div key={i}>
                                <div className="flex items-start gap-5">
                                    <Image
                                        src={obj.icon}
                                        width={29}
                                        height={29}
                                        alt="icons"
                                        className="w-full max-w-[39px] pointer-events-none"
                                    />
                                    <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">
                                        {obj.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-6/12 max-lg:w-full lg:justify-end flex'>
                    <Image src='/assets/images/the-project.webp' alt='the project' width={471} height={626} className='object-cover pointer-events-none max-lg:mx-auto' />
                </div>
            </div>
        </div>
    );
}

export default Project