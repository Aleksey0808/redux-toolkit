import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';

export const LoginForm = () => {
   
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        dispatch(logIn(form.elements.login.value))
        e.currentTarget.reset()
    }

    return <form onSubmit={handleSubmit}>
    <input type='text' name='login' />
    <br />
    <button type="submit">Login in</button>
</form>
}