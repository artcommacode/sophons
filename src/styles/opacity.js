// @flow
const opacities = [0, 0.025, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

export default (
  opacities.reduce((css, opacity) => {
    const mult = opacity * 100
    const key = mult && mult < 10 ? ('0' + mult).split('.').join('') : mult
    return {...css, [`.o-${key}`]: {opacity}}
  }, {})
)
