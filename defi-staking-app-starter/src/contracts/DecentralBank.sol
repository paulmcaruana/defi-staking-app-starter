pragma solidity ^0.5.5;

import './RWD.sol';
import './Odincoin.sol';


contract DecentralBank {
    string public name = 'Decentral Bank';
    address public owner;
    Odincoin public odincoin;
    RWD public rwd;

    constructor(RWD _rwd, Odincoin _Odincoin) public {
        rwd = _rwd;
        odincoin = _Odincoin;
    }
}