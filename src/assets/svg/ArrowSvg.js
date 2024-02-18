import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={12}
    fill="none"
    {...props}
  >
    <Rect width={17.143} height={1.714} y={5.143} fill="#fff" rx={0.857} />
    <Rect width={10.286} height={1.714} y={10.286} fill="#fff" rx={0.857} />
    <Rect width={10.286} height={1.714} x={6.857} fill="#fff" rx={0.857} />
  </Svg>
)
export default SvgComponent
