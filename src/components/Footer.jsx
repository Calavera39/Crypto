import React from 'react';
import ThemeToggle from './ThemeToggle'
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='rounded-div mt-8 text-primary p-4 pb-0'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-around w-[10rem]'>
                    <AiOutlineInstagram size={25}/>
                    <FaGithub size={25}/>
                    <FaTelegram size={25}/>
                </div>
                <div className='mt-5'>
                    <ThemeToggle />
                </div>
            </div>
            <p className='text-center text3xl py-4'>Powered by Coin Gecko</p>
        </div>
    );
}

export default Footer;
