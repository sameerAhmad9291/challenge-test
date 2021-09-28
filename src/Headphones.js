import * as React from "react"

function HeadPhones(props) {
  return (
    <svg className="headphones" width={30} height={31} viewBox="0 0 30 31" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.684C0 6.575 6.575 0 14.684 0c8.11 0 14.684 6.575 14.684 14.684v11.421A4.888 4.888 0 0124.474 31h-4.895V17.947h6.526v-3.263a11.413 11.413 0 00-11.42-11.42 11.413 11.413 0 00-11.422 11.42v3.263H9.79V31H4.895A4.888 4.888 0 010 26.105v-11.42zm6.526 6.527v6.526H4.895a1.636 1.636 0 01-1.632-1.632V21.21h3.263zm19.58 0v4.894c0 .898-.735 1.632-1.632 1.632h-1.632V21.21h3.263z"
        fill="#D77"
      />
    </svg>
  )
}

export default HeadPhones;
