// SPDX-License-Identifier: MIT

pragma solidity  0.8.15;

contract demo {
    uint public price;
    string public location = "LONDON";

    function setPrice(uint _price) public {
        price = _price;
    }
}