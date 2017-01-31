// @flow
const widths = [0, '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem']

const base = {
  '.bt-0': {borderTopWidth: 0},
  '.br-0': {borderRightWidth: 0},
  '.bb-0': {borderBottomWidth: 0},
  '.bl-0': {borderLeftWidth: 0},
}

export default (
  {...base, ...widths.reduce((css, width, i) => (
    {...css, [`.bw${i}`]: {borderWidth: width}}
  ), {})}
)
