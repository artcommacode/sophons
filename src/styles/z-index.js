// @flow
const indexes = [0, 1, 2, 3, 4, 5, 999, 9999]

const base = {
  '.z-max': {zIndex: 2147483647}
}

export default (
  {...base, ...indexes.reduce((css, zIndex) => (
    {...css, [`.z-${zIndex}`]: {zIndex}}
  ), {})}
)
