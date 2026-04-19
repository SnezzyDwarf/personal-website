export default function FacebookIcon({ size = 24, className, color }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* fundo */}
      <path d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z" />

      {/* logo */}
      <path
        d="M13.2,16.1v9.7c0,0.1,0.1,0.3,0.3,0.3h3.9c0.2,0,0.3-0.1,0.3-0.3v-9.8h2.8
        c0.1,0,0.3-0.1,0.3-0.2l0.3-3c0-0.2-0.1-0.3-0.3-0.3h-3.1v-2.1c0-0.5,0.4-0.9,1-0.9h2.2
        c0.2,0,0.3-0.1,0.3-0.3V6.3C21,6.1,20.9,6,20.7,6h-3.6c-2.1,0-3.9,1.6-3.9,3.6v2.9h-1.9
        c-0.2,0-0.3,0.1-0.3,0.3v3c0,0.1,0.1,0.3,0.3,0.3h1.9V16.1z"
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
