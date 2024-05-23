import * as React from "react";
const VerticalLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={162}
    height={279}
     viewBox="0 0 30 48"
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M30 0H0v48h30z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#b"
          transform="matrix(.00547 0 0 .00341 -.176 -1.333)"
        />
      </pattern>
      <image
        id="b"
        width={1500}
        height={3579}
      />
    </defs>
  </svg>
);
export default VerticalLogo;