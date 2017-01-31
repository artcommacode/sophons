// @flow
import colours from '../lib/colours'

export default (
  Object.keys(colours).reduce((css, colour) => (
    {...css, [`.b--${colour}`]: {borderColor: colours[colour]}}
  ), {})
)
