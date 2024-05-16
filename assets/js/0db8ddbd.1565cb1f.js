"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const i={},l="Staking",r={unversionedId:"bcfusion/developers/staking",id:"bcfusion/developers/staking",title:"Staking",description:"This guide provides an overview of the key operations of staking, including creating validators,",source:"@site/docs/bcfusion/developers/staking.md",sourceDirName:"bcfusion/developers",slug:"/bcfusion/developers/staking",permalink:"/docs/bcfusion/developers/staking",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/bcfusion/developers/staking.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Key Management for BSC Validators",permalink:"/docs/bcfusion/validators/key-management"},next:{title:"Governance",permalink:"/docs/bcfusion/developers/gov"}},d={},s=[{value:"Contract",id:"contract",level:2},{value:"Creating a Validator",id:"creating-a-validator",level:2},{value:"Editing Validator Information",id:"editing-validator-information",level:2},{value:"Edit Consensus Address",id:"edit-consensus-address",level:3},{value:"Edit Commission Rate",id:"edit-commission-rate",level:3},{value:"Edit Description",id:"edit-description",level:3},{value:"Edit Vote Address",id:"edit-vote-address",level:3},{value:"Delegation Operations",id:"delegation-operations",level:2},{value:"Delegate",id:"delegate",level:3},{value:"Undelegate",id:"undelegate",level:3},{value:"Redelegate",id:"redelegate",level:3},{value:"Claim",id:"claim",level:2},{value:"FAQs",id:"faqs",level:2},{value:"What are the functions/interfaces of each validator&#39;s credit contract?",id:"what-are-the-functionsinterfaces-of-each-validators-credit-contract",level:3},{value:"How to get the shares/BNB amount for a delegator?",id:"how-to-get-the-sharesbnb-amount-for-a-delegator",level:3},{value:"How to calculte the BNB amount for a specific amount of shares?",id:"how-to-calculte-the-bnb-amount-for-a-specific-amount-of-shares",level:3},{value:"How to calculate the APR/APY of a validator?",id:"how-to-calculate-the-aprapy-of-a-validator",level:3},{value:"How to get the unbonding delegations of a delegator, and his/her unbonding requests which can be claimed?",id:"how-to-get-the-unbonding-delegations-of-a-delegator-and-hisher-unbonding-requests-which-can-be-claimed",level:3},{value:"How to get the reward of a delegator?",id:"how-to-get-the-reward-of-a-delegator",level:3},{value:"How to get the total staking address of a validator?",id:"how-to-get-the-total-staking-address-of-a-validator",level:3},{value:"How to get all validators&#39; information?",id:"how-to-get-all-validators-information",level:3},{value:"Contract ABI",id:"contract-abi",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,"This guide provides an overview of the key operations of staking, including creating validators,\nediting validator information, and performing delegation operations.\nFor the general introduction of staking, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/bcfusion/validators/staking"},"Staking Mechanism"),"."),(0,o.kt)("h2",{id:"contract"},"Contract"),(0,o.kt)("p",null,"The BSC staking mainly uses the smart contracts ",(0,o.kt)("inlineCode",{parentName:"p"},"StakeHub")," for validator management and delegation management."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"StakeHub"),": Manages validator creations, user delegations, and executs penalty for validator slash.\n(Address: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000002002"),")")),(0,o.kt)("h2",{id:"creating-a-validator"},"Creating a Validator"),(0,o.kt)("p",null,"To create a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createValidator")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function createValidator(\n    address consensusAddress,\n    bytes calldata voteAddress,\n    bytes calldata blsProof,\n    Commission calldata commission,\n    Description calldata description\n) external payable\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"consensusAddress"),": The consensus address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"voteAddress"),": The vote address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blsProof"),": The BLS signature as proof of the vote address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commission"),": The commission structure, including rate, maxRate, and maxChangeRate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description"),": The description of the validator, including moniker, identity, website, and details.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Creating a validator requires locking 1 BNB, and the transaction must be sent with a sufficient BNB amount to\ncover this lock amount plus any self-delegation, in total 2001BNB."),(0,o.kt)("h2",{id:"editing-validator-information"},"Editing Validator Information"),(0,o.kt)("h3",{id:"edit-consensus-address"},"Edit Consensus Address"),(0,o.kt)("p",null,"To change the consensus address of a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"editConsensusAddress")," function with the following paramters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function editConsensusAddress(address newConsensusAddress) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newConsensusAddress"),": The new consensus address of the validator.")),(0,o.kt)("h3",{id:"edit-commission-rate"},"Edit Commission Rate"),(0,o.kt)("p",null,"To update the commission rate of a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"editCommissionRate")," function with the following paramters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function editCommissionRate(uint64 newCommissionRate) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newCommissionRate"),": The new commission structure, including rate, maxRate, and maxChangeRate.")),(0,o.kt)("h3",{id:"edit-description"},"Edit Description"),(0,o.kt)("p",null,"To update the description of a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"editDescription")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function editDescription(Description memory newDescription) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newDescription"),": The new description of the validator, including moniker, identity, website, and details.")),(0,o.kt)("h3",{id:"edit-vote-address"},"Edit Vote Address"),(0,o.kt)("p",null,"To change the vote address of a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"editVoteAddress")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function editVoteAddress(bytes calldata newVoteAddress, bytes calldata blsProof) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"newVoteAddress"),": The new vote address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blsProof"),": The BLS signature as proof of the vote address.")),(0,o.kt)("h2",{id:"delegation-operations"},"Delegation Operations"),(0,o.kt)("h3",{id:"delegate"},"Delegate"),(0,o.kt)("p",null,"To delegate BNB to a validator, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function delegate(address operatorAddress, bool delegateVotePower) external payable\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delegateVotePower"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the validator for governance.")),(0,o.kt)("h3",{id:"undelegate"},"Undelegate"),(0,o.kt)("p",null,"To undelegate BNB from a validator, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function undelegate(address operatorAddress, uint256 shares) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"shares"),": The amount of shares to undelegate from the validator.")),(0,o.kt)("h3",{id:"redelegate"},"Redelegate"),(0,o.kt)("p",null,"To redelegate BNB from one validator to another, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate")," function with the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function redelegate(address srcValidator, address dstValidator, uint256 shares, bool delegateVotePower) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"srcValidator"),": The operator address of the source validator to redelegate from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dstValidator"),": The operator address of the destination validator to redelegate to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"delegateVotePower"),": The flag to indicate whether the delegator would like to delegate his/her voting power\nto the destination validator for governance.")),(0,o.kt)("h2",{id:"claim"},"Claim"),(0,o.kt)("p",null,"To claim undelegated BNB after the unbonding period, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"claim")," function for a single request or ",(0,o.kt)("inlineCode",{parentName:"p"},"claimBatch")," for\nmultiple requests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function claim(address operatorAddress, uint256 requestNumber) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator address of the validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestNumber"),": The number of unbonding requests to claim from. ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," means claiming from all unbonding requests.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function claimBatch(address[] calldata operatorAddresses, uint256[] calldata requestNumbers) external\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorAddress"),": The operator addresses of the validatores."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"requestNumber"),": The numbers of unbonding requests to claim from the validators.")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"what-are-the-functionsinterfaces-of-each-validators-credit-contract"},"What are the functions/interfaces of each validator's credit contract?"),(0,o.kt)("p",null,"For each validator, there is a credit contract which will be automatically deployed when it is created.\nMeanwhile, the conctract cannot be upgraded or changed by any validator operator."),(0,o.kt)("p",null,"The credit contract is a BEP20 contract, and the ABI is the same\nas ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/abi/stakecredit.abi"},"Stake Credit contract"),"."),(0,o.kt)("p",null,"It provides functions for querying delegations, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"balanceOf(address)"),": Get the credit balance of a delegator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPooledBNB(address)"),": Get the pooled BNB amount of a delegator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPooledBNBByShares(uint256)"),": Get the pooled BNB amount for a specific amount of shares."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getSharesByPooledBNB(uint256)"),": Get the shares for a specific amount of pooled BNB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pendingUnbondingRequests(address)"),": Get the count of unbonding requests for a delegator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unbondRequest(address, uint256)"),": Get the details of a unbond request for a delegator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"claimableUnbondRequest(address)"),": Get the count of claimable unbonding requests for a delegator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedBNBs(address, uint256)"),": Get the locked BNBs for a delegator's unbond queue.")),(0,o.kt)("h3",{id:"how-to-get-the-sharesbnb-amount-for-a-delegator"},"How to get the shares/BNB amount for a delegator?"),(0,o.kt)("p",null,"For any specific validator, please call the ",(0,o.kt)("inlineCode",{parentName:"p"},"balanceOf")," function of the validator's creat contract to get the\ndelegator's shares. To get the BNB amount instead of shares, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"getPooledBNB")," can be used."),(0,o.kt)("p",null,"To get the shares of all validators, please call the ",(0,o.kt)("inlineCode",{parentName:"p"},"balanceOf")," function for each valiator and sum up\nthe results. Please refer to the following to see how to get the information of all validators, and use a\nmuticall contract to improve the efficiency."),(0,o.kt)("h3",{id:"how-to-calculte-the-bnb-amount-for-a-specific-amount-of-shares"},"How to calculte the BNB amount for a specific amount of shares?"),(0,o.kt)("p",null,"The credit contract provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"getPooledBNBByShares")," function to calculate the BNB amount for some specific amount of\nshares."),(0,o.kt)("p",null,"To do the vice visa, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"getSharesByPooledBNB")," function to calculate the shares for some\nspecific BNB amount."),(0,o.kt)("h3",{id:"how-to-calculate-the-aprapy-of-a-validator"},"How to calculate the APR/APY of a validator?"),(0,o.kt)("p",null,"Please be noted that each validator will have its own APR/APY, and the staking system will auto compound the rewards."),(0,o.kt)("p",null,"The reward is distributed to each validator's BNB pool at 00:00:00 UTC time every day. To calculate the APR/APY of a\nvalidator, the total pooled BNB amount and the crrospanding reward amount for the same day are needed."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"getValidatorTotalPooledBNBRecord(address,uint256)(uint256)"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"getValidatorRewardRecord(address,uint256)(uint256)")," for the purpose."),(0,o.kt)("p",null,"The following code shows shows how to calculate the APY at a given day:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// example code, do not use it in production\n\n// stakehub is the instance of StakeHub contract\nstakeHub, _ := contracts.NewStakeHub(ethcommon.HexToAddress("0x0000000000000000000000000000000000002002"), client.GetEthClient())\n\n// get how many blocks are in a day\ninterval, _ := stakeHub.BREATHEBLOCKINTERVAL(nil)\n\n// get the block time of a given block\nheader, _ := p.client.GetBlockHeader(blockHeight)\n\n// calculate the index paramter to call the following functions\nindex := int64(header.Time) / interval.Int64()\n\n// get the total pooled BNB amount and the crrospanding reward amount for the given validator and index\ntotalPooledBNB, _ := stakeHub.GetValidatorTotalPooledBNBRecord(nil, validatorOperatorAddress, index)\nreward, _ := stakeHub.GetValidatorRewardRecord(nil, validatorOperatorAddress, index)\n\n// calculate the APY\nrate, _ := big.NewFloat(0).Quo(big.NewFloat(0).SetInt(reward), big.NewFloat(0).SetInt(totalPooledBNB)).Float64()\napy := math.Pow(1+rate, 365) - 1.0\n')),(0,o.kt)("h3",{id:"how-to-get-the-unbonding-delegations-of-a-delegator-and-hisher-unbonding-requests-which-can-be-claimed"},"How to get the unbonding delegations of a delegator, and his/her unbonding requests which can be claimed?"),(0,o.kt)("p",null,"The credit contract provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"pendingUnbondRequest")," function to get the unbonding delegation count for a\ndelegator.\nTo review the details of a unbond request, please call the ",(0,o.kt)("inlineCode",{parentName:"p"},"unbondRequest")," function with a ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," parameter to\ndefine which unbond request will be returned."),(0,o.kt)("p",null,"To get the claimable unbonding requests, please call the ",(0,o.kt)("inlineCode",{parentName:"p"},"claimableUnbondRequest")," function to get the count of\nclaimable ones."),(0,o.kt)("p",null,"To get the locked BNBs for unbonding requests, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"lockedBNBs")," function. It has the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," to\ndefine the sum of first ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," unbonding requests' BNB locked in the delegator's unbond queue. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to get all the locked BNBs."),(0,o.kt)("h3",{id:"how-to-get-the-reward-of-a-delegator"},"How to get the reward of a delegator?"),(0,o.kt)("p",null,"The contracts does not save the initial delegation amount of a delegator. To get the accumulated\nreward, the following steps can be taken: 1) track the initial delegation amount in your system, 2) call\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"getPooledBNB")," of the credit contract of a validator, 3) do the math."),(0,o.kt)("h3",{id:"how-to-get-the-total-staking-address-of-a-validator"},"How to get the total staking address of a validator?"),(0,o.kt)("p",null,"The contract does not provide a function to get the total staking address of a validator.\nIt needs a offchain service to index ",(0,o.kt)("inlineCode",{parentName:"p"},"Delegated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Redelegated"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Undelegated")," events for the purpose."),(0,o.kt)("h3",{id:"how-to-get-all-validators-information"},"How to get all validators' information?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"StakeHub")," contract provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"getValidators")," function to get all validators' information, including the\n",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," addresses and ",(0,o.kt)("inlineCode",{parentName:"p"},"credit contract")," addresses."),(0,o.kt)("p",null,"To get more information of a specific validator, please refer to the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorConsensusAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorCreditContract")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorVoteAddress")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorBasicInfo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorDescription")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getValidatorCommission"))),(0,o.kt)("h2",{id:"contract-abi"},"Contract ABI"),(0,o.kt)("p",null,"For the full interfaces of ",(0,o.kt)("inlineCode",{parentName:"p"},"StakeHub"),", please refer\nto ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/bc-fusion/abi/stakehub.abi"},"the ABI file"),"."))}p.isMDXComponent=!0}}]);