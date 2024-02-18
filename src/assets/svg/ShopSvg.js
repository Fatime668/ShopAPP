import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.935 14H4.29c-2.074 0-3.665-.75-3.213-3.764l.526-4.086c.279-1.504 1.238-2.08 2.08-2.08h6.884c.854 0 1.758.62 2.08 2.08l.526 4.086c.384 2.674-1.164 3.763-3.238 3.763Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.028 3.922A2.922 2.922 0 0 0 7.106 1a2.922 2.922 0 0 0-2.934 2.922M9.112 6.967h-.031M5.17 6.967h-.032"
    />
  </Svg>
)
export default SvgComponent
