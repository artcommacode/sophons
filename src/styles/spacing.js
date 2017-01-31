// @flow
const scale = ['0', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem']

const styles = {
  'pa': ['padding'],
  'pt': ['paddingTop'],
  'pr': ['paddingRight'],
  'pb': ['paddingBottom'],
  'pl': ['paddingLeft'],
  'pv': ['paddingTop', 'paddingBottom'],
  'ph': ['paddingLeft', 'paddingRight'],
  'ma': ['margin'],
  'mt': ['marginTop'],
  'mr': ['marginRight'],
  'mb': ['marginBottom'],
  'ml': ['marginLeft'],
  'mv': ['marginTop', 'marginBottom'],
  'mh': ['marginLeft', 'marginRight']
}

export default (
  scale.reduce((css, spacing, i) => (
    {...css, ...Object.keys(styles).reduce((style, key) => (
      {...style, [`.${key}${i}`]: styles[key].reduce((values, value) => (
        {...values, [value]: spacing}
      ), {})}
    ), {})}
  ), {})
)
