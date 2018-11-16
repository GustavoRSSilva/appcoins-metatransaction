export const ADVERTISEMENT_ABI = [
  {
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "vercode"
      },
      {
        "type": "bool",
        "name": "ipValidation"
      },
      {
        "type": "bool",
        "name": "country"
      },
      {
        "type": "uint256",
        "name": "constipDailyConversions"
      },
      {
        "type": "uint256",
        "name": "walletDailyConversions"
      }
    ],
    "constant": true,
    "name": "rules",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": ""
      }
    ],
    "constant": true,
    "name": "owner",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "_addrAppc"
      },
      {
        "type": "address",
        "name": "_addrAdverStorage"
      },
      {
        "type": "address",
        "name": "_addrAdverFinance"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "type": "bytes32",
        "indexed": false,
        "name": "bidId"
      },
      {
        "type": "string",
        "indexed": false,
        "name": "packageName"
      },
      {
        "type": "uint64[]",
        "indexed": false,
        "name": "timestampList"
      },
      {
        "type": "uint64[]",
        "indexed": false,
        "name": "nonceList"
      },
      {
        "type": "string",
        "indexed": false,
        "name": "walletName"
      }
    ],
    "type": "event",
    "name": "PoARegistered"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "type": "string",
        "indexed": false,
        "name": "func"
      },
      {
        "type": "string",
        "indexed": false,
        "name": "message"
      }
    ],
    "type": "event",
    "name": "Error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "type": "bytes32",
        "indexed": false,
        "name": "bidId"
      },
      {
        "type": "address",
        "indexed": false,
        "name": "owner"
      },
      {
        "type": "string",
        "indexed": false,
        "name": "ipValidator"
      },
      {
        "type": "string",
        "indexed": false,
        "name": "packageName"
      },
      {
        "type": "uint256[3]",
        "indexed": false,
        "name": "countries"
      },
      {
        "type": "uint256[]",
        "indexed": false,
        "name": "vercodes"
      }
    ],
    "type": "event",
    "name": "CampaignInformation"
  },
  {
    "inputs": [
      {
        "type": "address",
        "name": "addrAdverStorage"
      }
    ],
    "outputs": [],
    "constant": false,
    "name": "upgradeStorage",
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "_contract"
      }
    ],
    "constant": true,
    "name": "getAdvertisementStorageAddress",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "string",
        "name": "packageName"
      },
      {
        "type": "uint256[3]",
        "name": "countries"
      },
      {
        "type": "uint256[]",
        "name": "vercodes"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "budget"
      },
      {
        "type": "uint256",
        "name": "startDate"
      },
      {
        "type": "uint256",
        "name": "endDate"
      }
    ],
    "outputs": [],
    "constant": false,
    "name": "createCampaign",
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "string",
        "name": "packageName"
      },
      {
        "type": "bytes32",
        "name": "bidId"
      },
      {
        "type": "uint64[]",
        "name": "timestampList"
      },
      {
        "type": "uint64[]",
        "name": "nonces"
      },
      {
        "type": "address",
        "name": "appstore"
      },
      {
        "type": "address",
        "name": "oem"
      },
      {
        "type": "string",
        "name": "walletName"
      }
    ],
    "outputs": [],
    "constant": false,
    "name": "registerPoA",
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [],
    "constant": false,
    "name": "cancelCampaign",
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getCampaignValidity",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getPriceOfCampaign",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getStartDateOfCampaign",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getEndDateOfCampaign",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getBudgetOfCampaign",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getOwnerOfCampaign",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": ""
      }
    ],
    "constant": true,
    "name": "getBidIdList",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "bytes32",
        "name": "bidId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": ""
      }
    ],
    "constant": true,
    "name": "isCampaignValid",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "uint256",
        "name": "numerator"
      },
      {
        "type": "uint256",
        "name": "denominator"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": ""
      }
    ],
    "constant": true,
    "name": "division",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "type": "uint256",
        "name": "i"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "b"
      }
    ],
    "constant": true,
    "name": "uintToBytes",
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

  var addressProxyAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "availableIds",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "at",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "createdTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "updatedTime",
          "type": "uint256"
        }
      ],
      "name": "AddressCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "at",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "createdTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "updatedTime",
          "type": "uint256"
        }
      ],
      "name": "AddressUpdated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAvailableIds",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "addAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "getContractNameById",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "getContractAddressById",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "getContractCreatedTimeById",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "getContractUpdatedTimeById",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
