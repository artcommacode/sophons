// @flow
const scale = ['-0.25rem', '-0.5rem', '-1rem', '-2rem', '-4rem', '-8rem', '-16rem']

const styles = {
  'na': 'margin',
  'nt': 'marginTop',
  'nr': 'marginRight',
  'nb': 'marginBottom',
  'nl': 'marginLeft',
}

export default (
  scale.reduce((css, spacing, i) => (
    {...css, ...Object.keys(styles).reduce((style, key) => (
      {...style, [`.${key}${i + 1}`]: {[`${styles[key]}`]: spacing}}
    ), {})}
  ), {})
)
