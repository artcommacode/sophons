// @flow
const scale = ['0.875rem', '1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem', '2.4rem', '3rem', '4rem']

const base = {
  '.f-headline': {fontSize: '6rem'},
  '.f-subheadline': {fontSize: '5rem'}
}

export default ({
  ...base,
  ...scale.reduce((css, fontSize, i) => (
    {...css, [`.f${i + 1}`]: {fontSize}}
  ), {})
})
