const PersonalData = artifacts.require("PersonalData");

const owner = "0x284521886F05F6b1971C5AeBe91095e048F0dA95";
const name = "Phan Khac Uy";
const sex = "Nam";
const dateOfBirth = "21/01/2001";
const email = "phankhacuy@gmail.com";
const phoneNumber = "0376393519";

module.exports = function (deployer) {
  deployer.deploy(PersonalData, owner, name, sex, dateOfBirth, email, phoneNumber);
};