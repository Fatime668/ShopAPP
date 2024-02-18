import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.269 7.21c-.775-2.42.13-5.185 2.67-6.003a4.339 4.339 0 0 1 3.923.659c1.05-.813 2.58-1.088 3.915-.66 2.54.82 3.451 3.585 2.677 6.004C13.248 11.046 7.862 14 7.862 14s-5.347-2.91-6.593-6.79Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#130F26"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.751 3.672c.773.25 1.319.94 1.385 1.75"
    />
  </Svg>
)
export default SvgComponent
