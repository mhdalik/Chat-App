import '../../styles/forget.scss';
import {appConfig} from "@/config/app";

export default function Forget() {
    return (
        <div className={"app__forget"}>
            <form action="#" className="app__forget__form">
                <section className="app__forget__section">
                    <h2>{appConfig?.appName}</h2>
                    <p>Welcome back to {appConfig?.appName}</p>
                </section>
                <section className="app__forget__section">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder={"Enter Email Address"}/>
                </section>
                <section className="app__forget__section">
                    <button className={"primary"}>
                        Submit
                    </button>
                </section>
                <section className="app__forget__section">
                    <a href="/">Remember Password? <b>Login</b></a>
                </section>
            </form>
        </div>
    )
}
