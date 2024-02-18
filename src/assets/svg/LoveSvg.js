import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#676767"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.254 6.733C.52 4.499 1.378 1.946 3.785 1.19a4.199 4.199 0 0 1 3.716.608c.996-.75 2.444-1.003 3.709-.608 2.407.755 3.27 3.308 2.537 5.542C12.604 10.273 7.5 13 7.5 13s-5.065-2.686-6.247-6.267Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#676767"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.238 3.469c.732.23 1.25.867 1.312 1.615"
    />
  </Svg>
)
export default SvgComponent
