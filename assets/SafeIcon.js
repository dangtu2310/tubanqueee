import * as React from "react";

function SafeIcon(props) {
  return (
    <svg
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.667 24.057H7v2.333H4.667v-2.333H3.5a1.167 1.167 0 01-1.167-1.167V5.39A1.167 1.167 0 013.5 4.224h8.167V2.579a.583.583 0 01.679-.576l12.346 2.058a1.167 1.167 0 01.975 1.15v2.513h1.166v2.333h-1.166v8.167h1.166v2.333h-1.166v2.512a1.166 1.166 0 01-.976 1.15l-1.357.226v1.945H21v-1.555l-8.654 1.442a.583.583 0 01-.68-.575v-1.645zm2.333-.42l9.334-1.556V6.2L14 4.645V23.637zm5.25-6.58c-.966 0-1.75-1.307-1.75-2.917 0-1.61.784-2.916 1.75-2.916S21 12.53 21 14.14c0 1.61-.784 2.917-1.75 2.917z" />
    </svg>
  );
}

export default SafeIcon;
