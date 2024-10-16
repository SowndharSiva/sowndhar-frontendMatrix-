import "./index.css"

const HomePage=()=>{
    return(
        <div className="home-bg" style={{ backgroundImage: "url(/image.png)"}}>
            <div className="menu-bar">
                <img src="\image bg.png" alt="logo"/>
                <img src="https://cdn-icons-png.flaticon.com/128/9652/9652559.png" alt="menu" className="menu-icon"/>
                <div className="sub-menu">
                    <p>Features</p>
                    <hr />
                    <p>Why Us</p>
                    <hr />
                    <p>Tokenomics</p>
                    <hr />
                    <p>Roadmap</p>
                    <hr />
                    <p>login</p>
                    <hr />
                    <p>Whitepaper</p>
                </div>
            </div>
            <div className="top-bar">
                <nav>
                    <p>Features</p>
                    <p>Why Us</p>
                    <p>Tokenomics</p>
                    <p>Roadmap</p>
                </nav>
                <div>
                    <button className="login">
                        Log in
                    </button>
                    <button className="nav-button">
                        Whitepaper
                    </button>
                </div>
            </div>
            <div className="content-div">
                <h1>
                    When innovation<br/> Meets <span>Investment</span>
                </h1>
                <p>Empowering Trading Through Advanced Technology </p>
                <button>Open dApp</button>
            </div>
        </div>
    )
}

export default HomePage