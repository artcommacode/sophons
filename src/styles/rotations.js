// @flow
const rotations = [45, 90, 135, 180, 225, 270, 315]

export default (
  rotations.reduce((css, rotation) => (
    {...css, [`.rotate-${rotation}`]: {transform: `rotate(${rotation}deg)`}}
  ), {})
)
