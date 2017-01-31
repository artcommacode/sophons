// @flow
const positions = ['top', 'right', 'bottom', 'left']
const coords = [0, 1, 2, -1, -2]

const base = {
  '.absolute-fill': {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}

export default (
  {...base, ...coords.reduce((css, num) => (
    {...css, ...positions.reduce((styles, position) => (
      {...styles, [`.${position}-${num}`]: {[position]: `${num}rem`}}
    ), {})}
  ), {})}
)
