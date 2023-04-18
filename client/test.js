const PersonalDataRegistryContract = require("./src/contracts/PersonalDataRegistry.json");
const Web3  = require("web3");

//Địa chỉ của từng người dùng
const addressct = "0x284521886F05F6b1971C5AeBe91095e048F0dA95";

const name = "Phan Khac Uy";
const sex = "Nam";
const dateOfBirth = "21/01/2001";
const email = "phankhacuy@gmail.com";
const phoneNumber = "0376393519";

const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
const web3 = new Web3(provider);
const networkId = web3.eth.net.getId();
const deployedNetwork = PersonalDataRegistryContract.networks[networkId];


// Khởi tạo đối tượng contract PersonalDataRegistryContract
const personalDataRegistryContract = new web3.eth.Contract(PersonalDataRegistryContract.abi, "0x5d90094FB8997a6346Ad01420B8481b5269C470C");

// tạo nguoi mới
personalDataRegistryContract.methods.createPersonalData(name,sex,dateOfBirth,email,phoneNumber).send({from: addressct,gas: 2000000,
     gasPrice: web3.utils.toWei("10", "gwei")})


//truy xuất
// personalDataRegistryContract.methods.getPersonalData(addressct).call().then(function(data){
//     console.log("Personal data:", data);
//   });

