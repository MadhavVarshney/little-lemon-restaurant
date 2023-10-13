import Nav from './Nav';

const logo = require('../assets/images/logo.png');

const Header = () => {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between"
    }
    return (
        <header style={headerStyle}>
            <img src={logo} alt="logo" width={400}></img>
            <div style={{ "width": "60%" }}>
                <Nav></Nav>
            </div>
        </header >
    )
}

export default Header;