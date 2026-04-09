export default function DangerIconTwo({ size = 24, className }) {
  return (
    <svg
      fill="#000000"
      width={size}
      height={size}
      className={`icon flat-line ${className || ""}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>

      <g id="SVGRepo_iconCarrier">
        <path
          d="M12.89,3.56l8,16A1,1,0,0,1,20,21H4a1,1,0,0,1-.9-1.45l8-16A1,1,0,0,1,12.89,3.56Z"
          style={{ fill: "#E6A900", strokeWidth: 2 }}
        ></path>

        <line
          x1="11.95"
          y1="16.5"
          x2="12.05"
          y2="16.5"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2.5,
          }}
        ></line>

        <path
          d="M12.89,3.56l8,16A1,1,0,0,1,20,21H4a1,1,0,0,1-.9-1.45l8-16A1,1,0,0,1,12.89,3.56ZM12,12V10"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        ></path>
      </g>
    </svg>
  );
}
