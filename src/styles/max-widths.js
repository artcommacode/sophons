// @flow
const scale = [0, '1rem', '2rem', '4rem', '8rem', '16rem', '32rem', '48rem', '64rem', '96rem']

const base = {
  '.mw-100': {maxWidth: '100%'},
  '.mw-none': {maxWidth: 'none'}
}

export default ({
  ...base,
  ...scale.reduce((css, maxWidth, i) => (
    {...css, [`.mw${i}`]: {maxWidth}}
  ), {})
})
