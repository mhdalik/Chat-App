import '../../styles/register.scss';

export default function Register() {
    return (
        <div className={"app__register"}>
            <form action="#" className="app__register__form">
                <section className="app__register__section">
                    <h2>Whisper</h2>
                    <p>Welcome to Whisper create a new account here</p>
                </section>
                <section className="app__register__section">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder={"Enter Username"}/>
                </section>
                <section className="app__register__section">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder={"Enter Email Address"}/>
                </section>
                <section className="app__register__section">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder={"Enter Password"}/>
                </section>
                <section className="app__register__section">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password"
                           placeholder={"Enter Confirm Password"}/>
                </section>
                <section className="app__register__section">
                    <button className={"primary"}>
                        Register
                    </button>
                </section>
                <section className="app__register__section">
                    <a href="/">Already have an account? <b>Login</b></a>
                </section>
            </form>
        </div>
    )
}
