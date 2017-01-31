// @flow
const displays = ['none', 'inline', 'block', 'inline-block', 'inline-table', 'table', 'table-cell']

export default (
  displays.reduce((css, display) => {
    const name = display.split('-').map((word) => word[0]).join('')
    return {...css, [`.d${name}`]: {display}}
  }, {})
)
