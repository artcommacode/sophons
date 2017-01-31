// @flow
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900]

const base = {
  normal: {fontWeight: 'normal'},
  b: {fontWeight: 'bold'},
}

export default (
  {...base, ...weights.reduce((css, weight, i) => (
    {...css, [`.fw${i + 1}`]: {fontWeight: weight}}
  ), {})}
)
