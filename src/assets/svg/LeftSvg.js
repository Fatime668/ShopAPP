import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M14 17.308 8.692 12 14 6.692l.708.708-4.6 4.6 4.6 4.6-.708.708Z"
    />
  </Svg>
)
export default SvgComponent
