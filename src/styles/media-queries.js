// @flow
const media = (size) => `@media screen and (max-width: ${size})`

const mediaQueries = {
  'xl': '80em',
  'l': '60em',
  'm': '50em',
  'ms': '40em',
  's': '30em'
}

export default (css: {}) => ({
  ...css,
  ...Object.keys(mediaQueries).reduce((queries, query) => (
    {...queries, [media(mediaQueries[query])]: Object.keys(css).reduce((elements, element) => (
      {...elements, [`${element}-${query}`]: css[element]}
    ), {})}
  ), {})
})
