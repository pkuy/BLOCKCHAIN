import { useState, useEffect } from "react";
import SimpleStorage from "./contracts/HelloBlockchain.json";
import Web3 from "web3";
import './App.css';
import detectEthereuemProvider from "@metamask/detect-provider";


const web3 = new Web3('HTTP://127.0.0.1:7545');

async function test() {
  
}

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  const [account, setAccount] = useState(null
    );

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  })

  useEffect(()=>{
    const loadProvider = async()=>{
      const provider = await detectEthereuemProvider();
      if(provider){
        provider.request({method:"eth_requestAccounts"})
        setWeb3Api({
          web3: new Web3(provider),
          provider
        })
      }else{
        console.error("please, Install Metamask")
      }
    }
    loadProvider()
  },[])

  useEffect(()=>{
    const getAccount= async()=>{
      const accounts = await web3Api.web3.eth.requestAccounts()
      setAccount(accounts[0])
    }
    web3Api.web3 && getAccount()
  },[web3Api.web3])



  const [data, setData] = useState("nill");

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorage.networks[networkId];


      const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork.address
      );


      console.log(networkId);
      console.log(deployedNetwork.address);

      setState({ web3: web3, contract: contract });
    }
    provider && template();
  }, []);


  useEffect(() => {
    const { contract } = state;

    async function readData() {
      const data = await contract.methods.getter().call();
      setData(data);
    }
    
    contract && readData();
  }, [state]);


  async function writeData() {
    const { contract } = state;
    const data = document.querySelector("#value").value;
    await contract.methods
      .setter(data)
      .send({ from: "0x33898E7F288A973D2fA818BEaF636ECdD1C58BEe" });
    window.location.reload();
  }

  
  return (
    <>
      <h1>Welcome to Dapp</h1>
      <div className="App">
        <p className="text">Contract Data : {data.d}</p>
        <div>
          <input type="text" id="value" required="required"></input>
        </div>

        <button onClick={writeData} className="button button2">
          Change Data
        </button>
        <span>
        <p className="text">Account ID : {account}</p>
        </span>
      </div>
    </>
  );
}

export default App;
