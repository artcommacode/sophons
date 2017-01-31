// @flow
const noRepeat = {backgroundRepeat: 'norepeat'}

const positions = {
  'bg-center': 'center center',
  'bg-top': 'top center',
  'bg-right': 'center right',
  'bg-bottom': 'bottom center',
  'bg-left': 'center left'
}

export default (
  Object.keys(positions).reduce((css, position) => (
    {...css, [`.${position}`]: {...noRepeat, backgroundPosition: positions[position]}}
  ), {})
)
