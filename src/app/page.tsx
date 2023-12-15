import Link from 'next/link';
import '../styles/login.scss';
import { logInUtils } from '@/utils';
import InputComponent from '@/Components/InputComponent';
import { FormUtilsI } from '@/Interface';

export default function Home() {
  return (
    <div className={"app__login"}>
      <form action="#" className="app__login__form">
        <section className="app__login__section">
          <h2>Whisper</h2>
          <p>Welcome back to Whisper</p>
        </section>
       {
        logInUtils.map((data:FormUtilsI)=> <InputComponent data={data} key={data.value}/>)
       }
        <section className="app__login__section">
          <Link href="/forget">Forgot Password?</Link>
        </section>
        <section className="app__login__section">
          <button className={"primary"}>
            Login
          </button>
        </section>
        <section className="app__login__section">
          <Link href="/register">Don't have an account? <b>Register</b></Link>
        </section>
      </form>
    </div>
  )
}
