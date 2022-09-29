import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return ( <nav className="nav">
        <Link to="/" className="site-title">Virtual Closet
        <img class="closet" src="https://cdn-icons-png.flaticon.com/512/148/148466.png"/>
        </Link>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/add-item">Add an Item</CustomLink>
            <CustomLink to="/search">Search Items</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}