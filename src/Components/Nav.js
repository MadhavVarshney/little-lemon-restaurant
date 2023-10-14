const Nav = () => {
    const list = {
        display: "flex",
        justifyContent: "space-around",
        height: "100%",
        padding: "0",
        flexWrap: "wrap"
    }

    const listItem = {
        listStyle: "none",
        alignSelf: "center",
        padding: "0 10px"
    }

    const listLink = {
        textDecoration: "none",
        color: "#1d1d1f",
        fontWeight: "700"
    }
    return (
        <nav style={{ height: "100%" }}>
            <ul style={list}>
                <li style={listItem}>
                    <a href="#" style={listLink}>Home</a>
                </li>
                <li style={listItem}>
                    <a href="#" style={listLink}>Menu</a>
                </li>
                <li style={listItem}>
                    <a href="#" style={listLink}>Reservations</a>
                </li>
                <li style={listItem}>
                    <a href="#" style={listLink}>Order Online</a>
                </li>
                <li style={listItem}>
                    <a href="#" style={listLink}>Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;