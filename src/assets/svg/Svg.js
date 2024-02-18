import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={7}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.988 5.095 8.882.2l.753.753L3.988 6.6.6 3.212l.753-.753 2.635 2.636Z"
    />
  </Svg>
)
export default SvgComponent
