import Nav from './Nav';

const logo = require('../../assets/images/logo.png');

const Header = () => {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderBottom: "30px solid #495E59"
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