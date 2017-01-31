// @flow
const radiuses = [0, '0.125rem', '0.25rem', '0.5rem', '1rem']

const base = {
  '.br-100': {borderRadius: '100%'},
  '.br-pill': {borderRadius: '9999px'},
  '.br--bottom': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  '.br--top': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  '.br--right': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  '.br--left': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
}

export default (
  {...base, ...radiuses.reduce((css, radius, i) => (
    {...css, [`.br${i}`]: {borderRadius: radius}}
  ), {})}
)
