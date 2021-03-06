import * as React from "react";

function SvgClipboard(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.464 5.777h-.448v-.043a1.055 1.055 0 00-1.057-1.055h-.719A2.33 2.33 0 0012 3a2.335 2.335 0 00-2.24 1.679H9.04a1.057 1.057 0 00-1.057 1.055v.043h-.448A2.538 2.538 0 005 8.31v10.157A2.531 2.531 0 007.536 21h8.928A2.538 2.538 0 0019 18.467V8.284a2.531 2.531 0 00-2.536-2.507zm-7.212.169h1.057a.643.643 0 00.634-.634A1.055 1.055 0 0112 4.257a1.057 1.057 0 011.057 1.055.641.641 0 00.634.634h1.057v1.266H9.252V5.946zm8.454 12.521a1.232 1.232 0 01-1.234 1.241H7.536a1.235 1.235 0 01-1.234-1.241V8.284a1.231 1.231 0 011.234-1.24h.448v.801a.641.641 0 00.634.634h6.764a.643.643 0 00.634-.634v-.802h.448a1.235 1.235 0 011.234 1.241l.008 10.183zm-8.242-7.059h5.072v1.267H9.464v-1.267zm5.072 3.8H9.464v1.266h5.072v-1.266z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgClipboard;
