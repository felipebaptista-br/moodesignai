'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Loader } from '@/components'

import './style.css'

export default function Login() {
    const router = useRouter()
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
        setIsSubmit(true)
        setTimeout(() => {
            router.push('/studio')
        }, 1500);
    }

    return (
        <main className='login-page'>
            <div className='login-bg-container'>
                <form className='login-form'>
                    <div className='login-form-title'>
                        <h2>Sig In</h2>
                        <p>Just some details to get you in.!</p>
                    </div>
                    <div className='login-form-fields'>
                        <input type="text" placeholder='Username' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className='submit'>
                        {!isSubmit ?
                            <button onClick={() => handleSubmit()}>Login</button>
                            :<Loader.Root />
                        }
                    </div>
                </form>
            </div>
        </main>
    )
}