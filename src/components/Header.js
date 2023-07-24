import logo from '../images/logo-white.svg';
export default function Header() {
        return (
            <header className="header">
                <img
                    className="logo"
                    src={logo}
                    alt="Логотип Mesto"
                />
            </header>
        )
    }
