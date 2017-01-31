// @flow
const heightScale = [0, '1rem', '2rem', '4rem', '8rem', '16rem']
const percentScale = [25, 50, 75, 100]

const base = {
  '.min-h-100': {minHeight: '100%'},
  '.min-vh-100': {minHeight: '100vh'},
  '.h-auto': {height: 'auto'},
  '.h-inherit': {height: 'inherit'}
}

export default ({
  ...base,
  ...heightScale.reduce((css, height, i) => (
    {...css, [`.h${i}`]: {height}}
  ), {}),
  ...percentScale.reduce((css, percent, i) => (
    {...css, [`.h-${percent}`]: {height: `${percent}%`}}
  ), {}),
  ...percentScale.reduce((css, percent, i) => (
    {...css, [`.vh-${percent}`]: {height: `${percent}vh`}}
  ), {})
})
