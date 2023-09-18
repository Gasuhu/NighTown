import "./Login.css"
const Login =()=>
{
    const google=()=>
    {
        window.open("http://localhost:3001/auth/google","_self")
    }
    return (
        
        <div className="Login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="" className="icon-login" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="" className="icon-login" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png" alt="" className="icon-login" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or"> OR </div>

                 
                </div>
                <div className="right">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login