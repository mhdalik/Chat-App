import '../styles/login.scss';
import {appConfig} from "@/config/app";

export default function Home() {
  return (
    <div className={"app__login"}>
      <form action="#" className="app__login__form">
        <section className="app__login__section">
          <h2>{appConfig?.appName}</h2>
          <p>Welcome back to {appConfig?.appName}</p>
        </section>
        <section className="app__login__section">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder={"Enter Email Address"}/>
        </section>
        <section className="app__login__section">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder={"Enter Password"}/>
        </section>
        <section className="app__login__section">
          <a href="/forget">Forgot Password?</a>
        </section>
        <section className="app__login__section">
          <button className={"primary"}>
            Login
          </button>
        </section>
        <section className="app__login__section">
          <a href="/register">Don't have an account? <b>Register</b></a>
        </section>
      </form>
    </div>
  )
}
