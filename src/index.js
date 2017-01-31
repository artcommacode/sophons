// @flow
import Absurd from 'absurd'
import {writeFileSync} from 'fs'

import mediaQueries from './styles/media-queries'
import aspectRatios from './styles/aspect-ratios'
import backgroundPosition from './styles/background-position'
import backgroundSize from './styles/background-size'
import borderColours from './styles/border-colours'
import borderRadius from './styles/border-radius'
import borderStyle from './styles/border-style'
import borderWidths from './styles/border-widths'
import borders from './styles/borders'
import boxSizing from './styles/box-sizing'
import clears from './styles/clears'
import code from './styles/code'
import colours from './styles/colours'
import cooordinates from './styles/coordinates'
import display from './styles/display'
import floats from './styles/floats'
import fontFamily from './styles/font-family'
import fontStyle from './styles/font-style'
import fontWeight from './styles/font-weight'
import forms from './styles/forms'
import heights from './styles/heights'
import images from './styles/images'
import letterSpacing from './styles/letter-spacing'
import lineHeight from './styles/line-height'
import list from './styles/list'
import maxWidths from './styles/max-widths'
import negativeMargins from './styles/negative-margins'
import opacity from './styles/opacity'
import outlines from './styles/outlines'
import overflow from './styles/overflow'
import position from './styles/position'
import rotations from './styles/rotations'
import spacing from './styles/spacing'
import textAlign from './styles/text-align'
import textDecoration from './styles/text-decoration'
import textTransform from './styles/text-transform'
import typeScale from './styles/type-scale'
import utilities from './styles/utilities'
import verticalAlign from './styles/vertical-align'
import visibility from './styles/visibility'
import whiteSpace from './styles/white-space'
import widths from './styles/widths'
import wordBreak from './styles/word-break'
import zIndex from './styles/z-index'

const {add, compile} = Absurd()

add({
  ...mediaQueries({
    ...aspectRatios,
    ...backgroundPosition,
    ...backgroundSize,
    ...borderRadius,
    ...borderStyle,
    ...borderWidths,
    ...borders,
    ...clears,
    ...cooordinates,
    ...display,
    ...floats,
    ...fontStyle,
    ...fontWeight,
    ...heights,
    ...letterSpacing,
    ...lineHeight,
    ...maxWidths,
    ...negativeMargins,
    ...opacity,
    ...outlines,
    ...overflow,
    ...position,
    ...rotations,
    ...spacing,
    ...textAlign,
    ...textDecoration,
    ...textTransform,
    ...typeScale,
    ...verticalAlign,
    ...visibility,
    ...whiteSpace,
    ...widths,
    ...wordBreak
  }),
  ...borderColours,
  ...boxSizing,
  ...code,
  ...colours,
  ...fontFamily,
  ...forms,
  ...images,
  ...list,
  ...utilities,
  ...zIndex
})

compile((err, css) => writeFileSync('./style.css', css), {minify: true})
// compile((err, css) => console.log(css))
