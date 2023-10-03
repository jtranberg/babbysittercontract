// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BabysitterPayment {
    address public babysitter;
    address public parent;
    uint256 public paymentAmount;

    bool public dishesCompleted;
    bool public vacuumCompleted;
    bool public toysAwayCompleted;
    
    bool public paymentReleased;

    event DutiesCompleted(address indexed doer, string duty);
    event PaymentReleased(address indexed babysitter, uint256 amount);

    modifier onlyParent() {
        require(msg.sender == parent, "Caller is not the parent");
        _;
    }

    modifier onlyBabysitter() {
        require(msg.sender == babysitter, "Caller is not the babysitter");
        _;
    }

    modifier dutiesCompleted() {
        require(dishesCompleted && vacuumCompleted && toysAwayCompleted, "All duties must be completed");
        _;
    }

    constructor(address _babysitter, uint256 _paymentAmount) {
        parent = msg.sender;
        babysitter = _babysitter;
        paymentAmount = _paymentAmount;
    }

    function completeDishes() external onlyBabysitter {
        require(!dishesCompleted, "Dishes already completed");
        dishesCompleted = true;
        emit DutiesCompleted(msg.sender, "Wash dishes");
    }

    function completeVacuum() external onlyBabysitter {
        require(!vacuumCompleted, "Vacuum already completed");
        vacuumCompleted = true;
        emit DutiesCompleted(msg.sender, "Vacuum the carpet");
    }

    function completeToysAway() external onlyBabysitter {
        require(!toysAwayCompleted, "Toys away already completed");
        toysAwayCompleted = true;
        emit DutiesCompleted(msg.sender, "Put toys away");
    }

    function releasePayment() external onlyParent dutiesCompleted {
        require(!paymentReleased, "Payment already released");
        paymentReleased = true;
        payable(babysitter).transfer(paymentAmount);
        emit PaymentReleased(babysitter, paymentAmount);
    }
}