// @flow
import colours from '../lib/colours'

export default ({
  ...Object.keys(colours).reduce((css, colour) => (
    {...css, [`.${colour}`]: {color: colours[colour]}}
  ), {}),
  ...Object.keys(colours).reduce((css, colour) => (
    {...css, [`.bg-${colour}`]: {backgroundColor: colours[colour]}}
  ), {}),
})
