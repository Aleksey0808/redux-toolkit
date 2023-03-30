import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { LoginForm } from './LoginForm';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid blqck',
        marginBottom: 12,
      }}
    >
      <nav>
        <LoginForm />
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
