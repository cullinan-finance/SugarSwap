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
  sushi: {
    56: '0xC0A2796080650F9B69b45983Ad9C285e6aeF024B',
  },
  masterChef: {
    56: '0xcE2e80052BAaD5f4076052dEbB54dE46FF80766a',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      56: '0x01A3a64061752B4234A4e0D8B0ef6075a2b9f6A1',
    },
    tokenAddresses: {
      56: '0x01A3a64061752B4234A4e0D8B0ef6075a2b9f6A1',
    },
    name: '嫦娥1',
    symbol: 'CE1',
    tokenSymbol: 'JC',
    icon: '💎',
  },
  {
    pid: 1,
    lpAddresses: {
      56: '0x2585f659485214CC9C63f8f53060d6052b190315',
    },
    tokenAddresses: {
      56: '0x2585f659485214CC9C63f8f53060d6052b190315',
    },
    name: '和谐2',
    symbol: 'HMS2',
    tokenSymbol: 'JC',
    icon: '💎',
  },
  {
    pid: 2,
    lpAddresses: {
      56: '0xf133Cd6E6844836443c246602490258c611f48B6',
    },
    tokenAddresses: {
      56: '0xf133Cd6E6844836443c246602490258c611f48B6',
    },
    name: '五彩鸡血石对章3',
    symbol: 'MBC3',
    tokenSymbol: 'JC',
    icon: '💎',
  }
]
