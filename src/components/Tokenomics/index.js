import "./index.css";  

const Tokenomics = () => {  
  return (  
    <div className="token-bg">  
      <h1>Tokenomics</h1>  
      <div className="token-cont">  
        <img src="./Donut.png" alt="Tokenomics Chart" />  
        <div className="token-data">  
          <div className="token-data1">  
            <p>Name: EthAi</p>  
            <p>Token Name: EthAi</p>  
            <p>Token standard: ERC20</p>  
            <p>Blockchain: Ethereum</p>  
            <p>Total Supply: 100 Million</p>  
            <p>Tax: 5%/5%</p>  
          </div>  
          <div className="token-data2">  
            <p>Team: 35%</p>  
            <p>Marketing: 5%</p>  
            <p>Liquidity pool: 90%</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Tokenomics;