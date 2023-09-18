import { Link } from "react-router-dom"
const Nav =({user})=>
{
    const logout=()=>{
        window.open("http://localhost:3001/auth/logout","_self")

    }
    return (
        
        <div className="navbar">
            
            <span className="logo"><Link className="link" to="/">NighTown</Link></span>
            
            <ul className="list">
                { user ?
                
(                   <> 
                     <li className="listItem">
                        <img src={user.photos[0].value} alt="" className="avatar"/>
                    </li>
                    <li className="listItem">
                        {user.displayName}
                    </li>
                    <li className="listItem" onClick={logout}>
                        Log out
                    </li>
                    </> )
                    :( <Link className="link" to ="/login">Login</Link>)
                }
            </ul>
        </div>
    )
}
export default Nav
//"https://www.svgrepo.com/show/62641/night.svg"