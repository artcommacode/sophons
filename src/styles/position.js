// @flow
const positions = ['static', 'relative', 'absolute', 'fixed']

export default (
  positions.reduce((css, position) => (
    {...css, [`.${position}`]: {position}}
  ), {})
)
