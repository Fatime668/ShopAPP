import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M4.313 12.202v-1.987c0-.507.414-.919.925-.919h1.869c.245 0 .48.097.653.27a.916.916 0 0 1 .272.65v1.986a.79.79 0 0 0 .23.564c.151.15.355.234.567.234h1.275a2.25 2.25 0 0 0 1.588-.65c.422-.417.658-.983.658-1.574V5.113c0-.477-.213-.93-.582-1.236L7.432.44a2.014 2.014 0 0 0-2.567.046L.63 3.877A1.61 1.61 0 0 0 0 5.113v5.657A2.238 2.238 0 0 0 2.246 13h1.246a.8.8 0 0 0 .803-.792l.018-.006Z"
    />
  </Svg>
)
export default SvgComponent
