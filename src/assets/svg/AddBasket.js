import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.997 17H5.05c-2.552 0-4.51-.922-3.954-4.633l.648-5.028c.342-1.851 1.523-2.56 2.56-2.56h8.471c1.052 0 2.164.762 2.56 2.56l.648 5.028C16.454 15.66 14.55 17 11.997 17Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.112 4.596A3.596 3.596 0 0 0 8.516 1a3.596 3.596 0 0 0-3.612 3.596M10.984 8.346h-.038M6.13 8.346h-.037"
    />
  </Svg>
)
export default SvgComponent
