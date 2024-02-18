import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.748 10.197c3.175 0 5.749-2.059 5.749-4.598C12.497 3.059 9.923 1 6.748 1 3.574 1 1 3.059 1 5.599s2.574 4.598 5.748 4.598ZM10.746 9.036 13 10.834"
    />
  </Svg>
)
export default SvgComponent
