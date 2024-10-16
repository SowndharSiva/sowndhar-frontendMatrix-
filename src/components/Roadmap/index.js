import "./index.css"


const Roadmap=()=>{
    return(
        <div className="road-bg">
            <h1 class="title">Roadmap</h1>
            <div className="rp-container">
                <div className="child-cont">
                    <p className="phase">Phase 1</p>
                    <h1>Kicking Off</h1>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Launch of EthAi: Officially</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Development of Core AI Agents</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">User Onboarding Campaign</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Community Engagement Initiatives</p>
                    </div>
                </div>
                <img src="./window.png" className="image"/>
            </div>
            <div className="rp-container">
            <div className="img-cont1">
                <img src="./preview.png" className="image"/>
                </div>
                <div className="child-cont">
                    <p className="phase">Phase 2</p>
                    <h1>Bigger Insights</h1>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Introduction of Advanced AI Agents</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Strategic Partnerships</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">User Interface Optimization</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Comprehensive Marketing Campaign</p>
                    </div>
                </div>
                
                
            </div>
            <div className="rp-container">
                <div className="child-cont">
                    <p className="phase">Phase 3</p>
                    <h1>Full Power</h1>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Introduction of Enhanced Features</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">API Integration for Data Access</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Launch of Community-Driven Initiatives</p>
                    </div>
                    <div>
                        <img src="./tick.png"/>
                        <p className="point">Continuous Improvement and Updates</p>
                    </div>
                </div>
                <div className="img-cont">
                <img src="./preview.png" className="image"/>
                </div>
                
            </div>
        </div>
    )
}
export default Roadmap