// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PersonalData {
    address payable public owner;
    string public name;
    string public sex;
    string public dateOfBirth;
    string public email;
    string public phoneNumber;

    constructor(address payable _owner, string memory _name, string memory _sex,string memory _dateOfBirth,
     string memory _email,string memory _phoneNumber) {
        owner = _owner;
        name = _name;
        sex = _sex;
        dateOfBirth = _dateOfBirth;
        email = _email;
        phoneNumber = _phoneNumber;
    }
}

contract PersonalDataRegistry {
    mapping(address => PersonalData) private personalDataMap;

    function createPersonalData(string memory name, string memory sex,string memory dateOfBirth, string memory email,string memory phoneNumber) public {
        PersonalData personalData = new PersonalData(payable(msg.sender), name, sex, dateOfBirth, email, phoneNumber);
        personalDataMap[payable(msg.sender)] = personalData;
    }

    function getPersonalData(address personalDataAddress) public view returns (address payable owner,string memory name, 
    string memory sex,string memory dateOfBirth, string memory email,string memory phoneNumber) 
    {
        PersonalData personalData = personalDataMap[personalDataAddress];
        return (personalData.owner() ,personalData.name(), personalData.sex(), personalData.dateOfBirth(), personalData.email(),
        personalData.phoneNumber());
    }
}