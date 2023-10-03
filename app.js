// Connect to Ethereum node using Web3.js
const web3 = new Web3(web3.givenProvider || "http://localhost:7545"); // Use your Ethereum node URL

// Replace with your contract address and ABI
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_babysitter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_paymentAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "doer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "duty",
				"type": "string"
			}
		],
		"name": "DutiesCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "babysitter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentReleased",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "babysitter",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "completeDishes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "completeToysAway",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "completeVacuum",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dishesCompleted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "parent",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paymentAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paymentReleased",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "releasePayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toysAwayCompleted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vacuumCompleted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to complete dishes
async function completeDishes() {
    await contract.methods.completeDishes().send({ from: /* Babysitter's address */ });
    alert("Dishes completed!");
}

// Function to complete vacuum
async function completeVacuum() {
    await contract.methods.completeVacuum().send({ from: /* Babysitter's address */ });
    alert("Vacuum completed!");
}

// Function to complete toys away
async function completeToysAway() {
    await contract.methods.completeToysAway().send({ from: /* Babysitter's address */ });
    alert("Toys away completed!");
}

// Function to release payment
async function releasePayment() {
    await contract.methods.releasePayment().send({ from: /* Parent's address */ });
    alert("Payment released!");
}