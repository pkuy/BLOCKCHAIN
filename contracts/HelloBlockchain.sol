// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract HelloBlockchain {
    uint256 a;
    
    function setter(uint256 _a)public{
        a = _a;
    }
    function getter()public view returns(uint256 c, uint256 d){
        return (a,12);
    }

}