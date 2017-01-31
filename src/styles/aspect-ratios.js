// @flow
const base = {
  '.aspect-ratio': {
    height: 0,
    position: 'relative'
  },
  '.aspect-ratio--object': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
}

const ratios = {
  '16x9': '56.25%',
  '9x16': '177.777%',
  '4x3': '72.85%',
  '3x4': '133.333%',
  '3x2': '66.666%',
  '2x3': '150%',
  '1x1': '100%'
}

export default (
  {...base, ...Object.keys(ratios).reduce((css, ratio) => (
    {...css, [`.aspect-ratio--${ratio}`]: {paddingBottom: ratios[ratio]}}
  ), {})}
)
