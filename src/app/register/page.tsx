'use client'
import Link from 'next/link';
import '../../styles/register.scss';
import { registerUtils } from '@/utils';
import InputComponent from '@/components/InputComponent';
import { FormUtilsI } from '../../interface';
import {appConfig} from "@/config/app";

export default function Register() {

    console.log('registerUtils',registerUtils);
    return (
        <div className={"app__register"}>
            <form action="#" className="app__register__form">
                <section className="app__register__section">
                    <h2>{appConfig?.appName}</h2>
                    <p>Welcome to {appConfig?.appName} create a new account here</p>
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
