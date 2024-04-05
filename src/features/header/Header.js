export default function Header(){
    return(
        <header className="header--wrapper">
            <div className="logo">
                <img className="logo--image" src="/assets/images/backpack-924588_1280.png" alt="" />
                <span className="header--logo--title">GGWent</span>
            </div>
            <nav className="navigations">
                <span className="navigation--buttons">Home</span>
                <span className="navigation--buttons">Others</span>
            </nav>
            <div className="header--right--side">
                <div className="become--expert--button">Become An Expert</div>
                <div className="signIn--register--button">Sign In / Register</div>
            </div>
        </header>
    )
}