import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="header">
        MyFinance
        <Link to="/">Home</Link>
        <Link to="/transacao">Transações</Link>
      </nav>
    </header>
  );
};

export default Header;
