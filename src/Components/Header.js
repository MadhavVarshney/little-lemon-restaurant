import Nav from './Nav';

const logo = require('../assets/images/logo.png');

const Header = () => {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }
    return (
        <header style={headerStyle}>
            <div className='logo-wrapper'>
                <img src={logo} alt="logo" className='logo'></img>
            </div>
            <div className='nav-wrapper'>
                <Nav></Nav>
            </div>
        </header >
    )
}

export default Header;