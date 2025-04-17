// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DAOProposal {
    mapping(address => uint256) public votes;
    uint256 public totalVotes;
    address public proposalAuthor;
    string public proposalText;

    constructor(string memory _proposalText) {
        proposalAuthor = msg.sender;
        proposalText = _proposalText;
    }

    function vote(uint256 _votes) public {
        votes[msg.sender] = _votes;
        totalVotes += _votes;
    }

    function proposalOutcome() public view returns (string memory) {
        if (totalVotes > 100) {
            return "Proposal Accepted";
        } else {
            return "Proposal Rejected";
        }
    }
}
