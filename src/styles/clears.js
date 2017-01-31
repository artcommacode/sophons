// @flow
const clear = {
  content: '',
  display: 'table'
}

export default ({
  '.cf': {
    '*zoom': 1,
    ':before': clear,
    ':after': {...clear, clear: 'both'}
  },
  '.cl': {clear: 'left'},
  '.cr': {clear: 'right'},
  '.cb': {clear: 'both'},
  '.cn': {clear: 'none'}
})
