// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;

    function stake(uint256 amount) public {
        stakes[msg.sender] += amount;
    }

    function unstake(uint256 amount) public {
        stakes[msg.sender] -= amount;
    }

    function calculateReward(address user) public view returns (uint256) {
        return stakes[user] / 100;
    }
}
