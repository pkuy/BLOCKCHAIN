const PersonalDataRegistry = artifacts.require("PersonalDataRegistry");

module.exports = function (deployer) {
  deployer.deploy(PersonalDataRegistry, "Personal DataRegistry");
};