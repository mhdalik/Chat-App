'use client'
import Link from 'next/link';
import '../../styles/register.scss';
import { registerUtils } from '@/utils';
import InputComponent from '@/Components/InputComponent';
import { FormUtilsI } from '@/Interface';

export default function Register() {
    
    console.log('registerUtils',registerUtils);
    return (
        <div className={"app__register"}>
            <form action="#" className="app__register__form">
                <section className="app__register__section">
                    <h2>Whisper</h2>
                    <p>Welcome to Whisper create a new account here</p>
                </section>
                {
                    registerUtils.map((data:FormUtilsI)=>{
                        return <InputComponent data={data} key={data.value}/>
                    })
                }
                <section className="app__register__section">
                    <button className={"primary"}>
                        Register
                    </button>
                </section>
                <section className="app__register__section">
                    <Link href="/">Already have an account? <b>Login</b></Link>
                </section>
            </form>
        </div>
    )
}
