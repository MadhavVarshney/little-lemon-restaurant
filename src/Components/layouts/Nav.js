import { Link, useLocation } from 'react-router-dom'
import pages from '../../utils/pages'

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

    const { pathname } = useLocation();

    const navLinks = Array.from(pages.values()).filter(links => links.anchorable);
    return (
        <nav style={{ height: "100%" }}>
            <ul style={list}>
                {
                    navLinks.map(link => {
                        return (
                            <li style={listItem} key={link.name}>
                                <Link to={link.path} className={pathname === link.path ? 'listLink current-location' : 'listLink'}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;