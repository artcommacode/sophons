// @flow

const styles = ['Top', 'Right', 'Bottom', 'Left']

const base = {
  '.ba': {
    borderStyle: 'solid',
    borderWidth: '1px'
  },
  '.bn': {
    borderStyle: 'none',
    borderWidth: 0
  }
}

export default (
  {...base, ...styles.reduce((css, name) => (
    {...css, [`.b${name[0].toLowerCase()}`]: {
      [`border${name}Style`]: 'solid',
      [`border${name}Width`]: '1px'
    }}
  ), {})}
)
