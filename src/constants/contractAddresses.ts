export interface ContractAddressProps {
  // TOKENS
  NEWO: string
  NEWO_USDC_LP: string
  USDC: string
  VENEWO: string
  WAVAX?: string
  NEWO_WAVAX_LP?: string
  // VAULTS
  NEWO_WAVAX_LP_VAULT?: string
  VE_NEWO_SINGLE_SIDE_VAULT: string
  VE_NEWO_USDC_LP_VAULT?: string
  VE_NEWO_WAVAX_LP_VAULT?: string
  NEWO_SINGLE_SIDE_VAULT: string
  NEWO_USDC_LP_VAULT?: string
  GOVERNANCE_VAULT?: string
  // EXCHANGES
  ONE_WAY_EXCHANGE?: string
  // AIRDROPS
  AIRDROP?: string
}

export interface ContractAddressesProps {
  [key: number]: ContractAddressProps
}

export const contractAddresses: ContractAddressesProps = {
  1: {
    // TOKENS
    NEWO: '0x98585dFc8d9e7D48F0b1aE47ce33332CF4237D96',
    NEWO_USDC_LP: '0xc08ED9a9ABEAbcC53875787573DC32Eee5E43513',
    USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    VENEWO: '0x44dd83E0598e7A3709cF0b2e59D3319418068a65',
    WAVAX: '',
    NEWO_WAVAX_LP: '',
    // VAULTS
    VE_NEWO_SINGLE_SIDE_VAULT: '0x1a82b680B47919Fd0c4B945F9d492A8688EE8933',
    VE_NEWO_USDC_LP_VAULT: '0x86e8062c9F9e5f852bB0D8fc3f33fc110E9b2e47',
    NEWO_SINGLE_SIDE_VAULT: '0xBC9016C379fb218B95Fe3730D5F49F3149E86CAB',
    NEWO_USDC_LP_VAULT: '0xdb36b23964FAB32dCa717c99D6AEFC9FB5748f3a',
    GOVERNANCE_VAULT: '0x0f28C58cd97270a2FdEBC89462A405D7a5A56981',
    // EXCHANGES
    ONE_WAY_EXCHANGE: '0xb3c60348A8f8eD8B260FD1966c9f2b740e6caedF',
    // AIRDROPS
    AIRDROP: '0x92491C8871ef7E06921f29238674CaF54652f218',
  },
  5: {
    // TOKENS
    NEWO: '0xe5EF84BA9Dc859360727A27D13105a72b9023834',
    NEWO_USDC_LP: '0x551ed89B85Fe80e64f744cA958880b6E36433215',
    USDC: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
    VENEWO: '0x59b818dC48b6cbE96548Cec6a65832642685747a',
    WAVAX: '',
    NEWO_WAVAX_LP: '',
    // VAULTS
    VE_NEWO_SINGLE_SIDE_VAULT: '0x942B710D9E43e44207fF7939DdB911eA11260DBC',
    VE_NEWO_USDC_LP_VAULT: '0xfef60b14991998977cA740B70087E8412283dbbc',
    NEWO_SINGLE_SIDE_VAULT: '',
    NEWO_USDC_LP_VAULT: '',
    GOVERNANCE_VAULT: '',
    // EXCHANGES
    ONE_WAY_EXCHANGE: '',
    // AIRDROPS
    AIRDROP: '',
  },
  43114: {
    // TOKENS
    NEWO: '0x4Bfc90322dD638F81F034517359BD447f8E0235a',
    NEWO_USDC_LP: '',
    USDC: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    VENEWO: '0x50d4adE79e748CE7CDe7F97b1708364E45421820',
    WAVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    NEWO_WAVAX_LP: '0x3931589c6C078524d1FA88E4d86D2F1aC9fEd56d',
    // VAULTS
    NEWO_WAVAX_LP_VAULT: '0xCDCa2C226eA55ed11e1CDCFf964AfB26A198bB0C',
    VE_NEWO_SINGLE_SIDE_VAULT: '0x91be558462e67ec32b5ed3f341db8ad720a98e99',
    // VE_NEWO_WAVAX_LP_VAULT
    VE_NEWO_WAVAX_LP_VAULT: '0xD56cA252facD3d45Ad61D9700322E639d4eF5A7A',
    VE_NEWO_USDC_LP_VAULT: '',
    NEWO_SINGLE_SIDE_VAULT: '0x27c61A04f5c0F28764ADF926f99efCf9D15e9c2d',
    NEWO_USDC_LP_VAULT: '',
    GOVERNANCE_VAULT: '',
    // EXCHANGES
    ONE_WAY_EXCHANGE: '',
    // AIRDROPS
    AIRDROP: '',
  },
  43113: {
    // TOKENS
    NEWO: '0xe12Acac280EAa9CA7FacFd567f22271Feac682A9',
    NEWO_USDC_LP: '0x35C3d70fCd15AE6E6069a3370b025bbB42a115d9',
    USDC: '0xaf82969ecf299c1f1bb5e1d12ddacc9027431160',
    VENEWO: '',
    WAVAX: '',
    NEWO_WAVAX_LP: '',
    // VAULTS
    NEWO_WAVAX_LP_VAULT: '',
    VE_NEWO_SINGLE_SIDE_VAULT: '',
    VE_NEWO_WAVAX_LP_VAULT: '',
    VE_NEWO_USDC_LP_VAULT: '',
    NEWO_SINGLE_SIDE_VAULT: '0xfD264BdE9C5F943D7eF6Ba2851ecB0F709c765EC',
    NEWO_USDC_LP_VAULT: '0xA1d3EE509c25287153cCD057973b82b8bc49BC15',
    GOVERNANCE_VAULT: '',
    // EXCHANGES
    ONE_WAY_EXCHANGE: '',
    // AIRDROPS
    AIRDROP: '',
  },
}
