import { Link } from "react-router-dom"
import { UserMenu } from "./UserMenu"
import { useSelector } from "react-redux"

export const AppBar = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return <header style={
        {
        display: 'flex',
        justifyContent: "space-between",
        padding: 8,
        borderBottom: '1px solid blqck',
        marginBottom: 12,}
    }> 
        {/* <nav>
            <Link>Login</Link>
        </nav>
    {isLoggedIn && <UserMenu />} */}

    <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        
      </nav>
      {isLoggedIn && <UserMenu />}
    
    </header>
}