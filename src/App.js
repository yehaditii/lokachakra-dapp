import React, { useEffect, useState } from "react";
import './App.css';
import Web3 from "web3";
import { MentorNFT, DAOProposal, Staking } from './contracts'; // You'll import your contract ABIs here

const App = () => {
  const [account, setAccount] = useState(null);
  
  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    web3.eth.requestAccounts().then(accounts => {
      setAccount(accounts[0]);
    });
  }, []);

  const mintNFT = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(MentorNFT.abi, MentorNFT.address);
    await contract.methods.mint(account).send({ from: account });
  };

  return (
    <div className="App">
      <h1>Welcome to Lokachakra</h1>
      <p>Account: {account}</p>
      <button onClick={mintNFT}>Mint Mentor NFT</button>
    </div>
  );
};

export default App;
