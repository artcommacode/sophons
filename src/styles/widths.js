// @flow
const widths = [0, '1rem', '2rem', '4rem', '8rem', '16rem']
const percents = [10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100]

const base = {
  '.w-third': {width: '33.333333%'},
  '.w-two-thirds': {width: '66.666666%'},
  '.w-sixth': {width: '16.666666%'},
  '.w-two-thirds': {width: '66.666666%'},
  '.w-auto': {width: 'auto'},
}

export default ({
  ...base,
  ...widths.reduce((css, width, i) => (
    {...css, [`.w${i}`]: {width}}
  ), {}),
  ...percents.reduce((css, percent, i) => (
    {...css, [`.w-${percent}`]: {width: `${percent}%`}}
  ), {}),
})
