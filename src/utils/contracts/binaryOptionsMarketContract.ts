export const binaryOptionMarketContract = {
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_creator',
					type: 'address',
				},
				{
					internalType: 'uint256[2]',
					name: '_creatorLimits',
					type: 'uint256[2]',
				},
				{
					internalType: 'bytes32',
					name: '_oracleKey',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: '_strikePrice',
					type: 'uint256',
				},
				{
					internalType: 'uint256[3]',
					name: '_times',
					type: 'uint256[3]',
				},
				{
					internalType: 'uint256[2]',
					name: '_bids',
					type: 'uint256[2]',
				},
				{
					internalType: 'uint256[3]',
					name: '_fees',
					type: 'uint256[3]',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'side',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Bid',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'result',
					type: 'uint8',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'oraclePrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'oracleTimestamp',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'deposited',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'poolFees',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'creatorFees',
					type: 'uint256',
				},
			],
			name: 'MarketResolved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'longOptions',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'shortOptions',
					type: 'uint256',
				},
			],
			name: 'OptionsClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'OptionsExercised',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'oldOwner',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnerChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnerNominated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'longPrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'shortPrice',
					type: 'uint256',
				},
			],
			name: 'PricesUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'side',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'fee',
					type: 'uint256',
				},
			],
			name: 'Refund',
			type: 'event',
		},
		{
			constant: true,
			inputs: [],
			name: 'MAX_ADDRESSES_FROM_RESOLVER',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'acceptOwnership',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'balancesOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'side',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'bid',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'bidSide',
					type: 'uint8',
				},
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'priceSide',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'refund',
					type: 'bool',
				},
			],
			name: 'bidOrRefundForPrice',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'bidsOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'canResolve',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'claimOptions',
			outputs: [
				{
					internalType: 'uint256',
					name: 'longClaimed',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'shortClaimed',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'claimableBalancesOf',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'creator',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'creatorLimits',
			outputs: [
				{
					internalType: 'uint256',
					name: 'capitalRequirement',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'skewLimit',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'deposited',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'exercisableDeposits',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'exerciseOptions',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address payable',
					name: 'beneficiary',
					type: 'address',
				},
			],
			name: 'expire',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'fees',
			outputs: [
				{
					internalType: 'uint256',
					name: 'poolFee',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'creatorFee',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'refundFee',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'getResolverAddressesRequired',
			outputs: [
				{
					internalType: 'bytes32[24]',
					name: 'addressesRequired',
					type: 'bytes32[24]',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'contract AddressResolver',
					name: '_resolver',
					type: 'address',
				},
			],
			name: 'isResolverCached',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
			],
			name: 'nominateNewOwner',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'nominatedOwner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'options',
			outputs: [
				{
					internalType: 'contract BinaryOption',
					name: 'long',
					type: 'address',
				},
				{
					internalType: 'contract BinaryOption',
					name: 'short',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'oracleDetails',
			outputs: [
				{
					internalType: 'bytes32',
					name: 'key',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'strikePrice',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'finalPrice',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'oraclePriceAndTimestamp',
			outputs: [
				{
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'updatedAt',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'phase',
			outputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Phase',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'prices',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'side',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'refund',
					type: 'bool',
				},
			],
			name: 'pricesAfterBidOrRefund',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: 'side',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'refund',
			outputs: [
				{
					internalType: 'uint256',
					name: 'refundMinusFee',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'resolve',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'resolved',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'resolver',
			outputs: [
				{
					internalType: 'contract AddressResolver',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'resolverAddressesRequired',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'result',
			outputs: [
				{
					internalType: 'enum IBinaryOptionMarket.Side',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'senderPriceAndExercisableDeposits',
			outputs: [
				{
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'exercisable',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract AddressResolver',
					name: '_resolver',
					type: 'address',
				},
			],
			name: 'setResolverAndSyncCache',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'times',
			outputs: [
				{
					internalType: 'uint256',
					name: 'biddingEnd',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'maturity',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'expiry',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBids',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalClaimableSupplies',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupplies',
			outputs: [
				{
					internalType: 'uint256',
					name: 'long',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'short',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
	],
};

export default binaryOptionMarketContract;
