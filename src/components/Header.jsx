import "./Header.css"

const Header = () => {
    return (
        <nav>
            <div className = "Logo">
                <div id = "logo"></div>
                <h1>Medical Darpan</h1>
            </div>
            <ul className = "navigation">
                <li>Home</li>
                <li>Products</li>
                <li>Distributors</li>
                <li>Manufacturers</li>
                <li>About us</li>
                <li>Blog</li>
            </ul>
            <div className = "options">
                <p>Login</p>
                <ion-icon name="person-circle-outline"></ion-icon>
            </div>
        </nav>
    )
}

export default Header;