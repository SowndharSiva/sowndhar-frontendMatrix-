import "./index.css"


const Features=()=>{
    return(
        <div className="features-bg">
            <div className="f-container">
                <div className="container one">
                    <div className="borders">
                        <div></div>
                    </div>
                    <img src=""/>
                    <h1>Trade Optimizer</h1>
                    <p>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
                </div>
                <div>
                    <div className="container two">
                    <h1> Market Insight </h1>
                    <p className="twop"> Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
                    </div>
                    <div className="container three">
                        <h1>Our Features</h1>
                    </div>
                </div>
                <div className="container four">
                    <img src="\circuit.png" />
                    <h1>Risk Guard </h1>
                    <p>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything. </p>

                </div>
               
            </div>
            <div className="f-container1">
                <div className="container five">
                    <h1>Portfolio Sync </h1>
                    <p>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
                </div>
                <div className="container six">
                    <h1>Opportunity Scout </h1>
                    <p>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
                </div>
            </div>
        </div>
    )
}
export default Features