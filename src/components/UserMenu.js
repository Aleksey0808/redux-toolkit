import { useSelector, useDispatch } from "react-redux"
import { logOut } from "redux/userSlice"

export const UserMenu = () => {
    const dispatch = useDispatch()

    const login = useSelector(state => state.user.login)
    return <div><button type="button" onClick={() => dispatch(logOut())}>Log Out</button>{login}</div>
}