import * as React from "react";

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" {...props}>
      <path d="M5.012.933L1.896 4l3.116 3.067L4.063 8 0 4l4.063-4 .949.933z" />
    </svg>
  );
}

export default SvgChevronLeft;
