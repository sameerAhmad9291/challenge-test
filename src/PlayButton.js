import * as React from "react"

function PlayButton(props) {
  return (
    <svg className="playButton" width={36} height={36} viewBox="0 0 36 36" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C8.064 0 0 8.064 0 18s8.064 18 18 18 18-8.064 18-18S27.936 0 18 0zm0 32.4c-7.938 0-14.4-6.462-14.4-14.4 0-7.938 6.462-14.4 14.4-14.4 7.938 0 14.4 6.462 14.4 14.4 0 7.938-6.462 14.4-14.4 14.4zM25.2 18l-10.8 8.1V9.9L25.2 18z"
        fill="#D77"
      />
    </svg>
  )
}

export default PlayButton
