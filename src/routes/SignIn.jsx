import React from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
            <div className='text-2xl font-bold'>Sign In</div>
            <form>
                <div className='my-4'>
                    <label>Email</label>
                    <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                        <input type='email' className='w-full p-2 bg-primary border border-input rounded-2xl'/>
                        <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
                    </div>
                </div>
                <div className='my-4'>
                    <label>Password</label>
                    <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                        <input className='w-full p-2 bg-primary border border-input rounded-2xl' type='password' /> 
                        <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
                    </div>
                </div>
                <button className='w-full my-2 p-3 bg-button rounded-2xl shadow-xl'>Sign in</button>
            </form>
            <p>Don't have an account? <Link className='text-accent' to='/signup'>Sign Up</Link></p>
        </div>
    );
}

export default SignIn;
