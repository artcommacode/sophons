// @flow
const values = ['visible', 'hidden', 'scroll', 'auto']
const overflows = ['overflow', 'overflow-x', 'overflow-y']

export default (
  values.reduce((css, value) => (
    {...css, ...overflows.reduce((style, flow) => (
      {...style, [`.${flow}-${value}`]: {[flow]: value}}
    ), {})}
  ), {})
)

