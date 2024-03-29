import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="none"
      d="M13.015 7.716c-.584-.682-.85-1.274-.85-2.278v-.342c0-1.31-.3-2.153-.956-2.996C10.2.79 8.5 0 6.835 0h-.07c-1.63 0-3.276.753-4.303 2.01-.691.86-1.028 1.74-1.028 3.086v.342c0 1.004-.248 1.596-.85 2.278C.142 8.22 0 8.866 0 9.564c0 .7.23 1.364.691 1.903a3.626 3.626 0 0 0 2.32 1.13 33.34 33.34 0 0 0 3.79.197c1.274 0 2.53-.09 3.789-.197a3.626 3.626 0 0 0 2.319-1.13c.46-.54.69-1.202.69-1.903 0-.699-.14-1.345-.584-1.848Z"
    />
    <Path
      fill="#000"
      d="M8.407 13.783c-.4-.086-2.837-.086-3.237 0-.342.079-.712.263-.712.665.02.385.245.724.557.939.402.315.875.515 1.37.586.265.037.533.035.807 0a2.91 2.91 0 0 0 1.37-.585v-.001c.312-.215.537-.554.557-.939 0-.402-.37-.586-.712-.665Z"
      opacity={0.4}
    />
  </Svg>
)
export default SvgComponent
