import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
}

export const contractAddresses = {
}



export const supportedPools = [
  {
    pid: 18,
    lpAddresses: {
    },
    tokenAddresses: {
    },
    name: '测试资产!',
    symbol: 'TokenA-SUSHI UNI-V2 LP',
    tokenSymbol: 'TOKENA',
    icon: '🍣',
  },
  {
    pid: 12,
    lpAddresses: {
    },
    tokenAddresses: {
    },
    name: '测试资产2!',
    symbol: 'ToeknB-SUSHI UNI-V2 LP',
    tokenSymbol: 'TOKENB',
    icon: '🍣',
  },
]
