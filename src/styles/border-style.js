// @flow

const styles = ['dotted', 'dashed', 'solid', 'none']

export default (
  styles.reduce((css, style) => (
    {...css, [`.b--${style}`]: {borderStyle: style}}
  ), {})
)
