"use client";
import Link from 'next/link';
import '../styles/login.scss';
import {appConfig} from "@/config/app";
import { logInUtils } from '@/utils';
import InputComponent from '@/components/InputComponent';
import { FormUtilsI } from '../interface';
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={"app__login"}>
      <form action="#" className="app__login__form">
        <section className="app__login__section">
          <h2>{appConfig?.appName}</h2>
          <p>Welcome back to {appConfig?.appName}</p>
        </section>
       {
        logInUtils.map((data:FormUtilsI)=> <InputComponent data={data} key={data.value}/>)
       }
        <section className="app__login__section">
          <Link href="/forget">Forgot Password?</Link>
        </section>
        <section className="app__login__section">
          <button onClick={() => router.push("/chat")} type="button" className={"primary"}>
            Login
          </button>
        </section>
        <section className="app__login__section">
          <Link href="/register">Don&apos;t have an account? <b>Register</b></Link>
        </section>
      </form>
    </div>
  )
}
