import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M3.587 13.779c1.78 1.769 4.883 4.22 8.413 4.22 3.53 0 6.634-2.451 8.413-4.22.47-.467.705-.7.854-1.159.107-.327.107-.913 0-1.24-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-3.53 0-6.634 2.452-8.413 4.221-.47.467-.705.7-.854 1.159-.107.327-.107.913 0 1.24.15.458.384.692.854 1.159Z" />
      <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </G>
  </Svg>
)
export default SvgComponent

