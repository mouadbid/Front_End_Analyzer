import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="src/assets/logo.jpg" alt="itelcia logo" />
            </div>
            <div className="title">
                <h3>Java Code Analyzer</h3>
                <p>
                    Unique rules to find Bugs, Vulnerabilities, Security <br />
                    Hotspots, and Code Smells in your JAVA code
                </p>
            </div>
        </div>
    );
}

export default Header;
