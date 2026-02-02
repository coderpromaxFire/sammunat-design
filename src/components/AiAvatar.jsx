export default function AiAvatar({ size = 28 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-gradient-to-br from-[#1B998B] to-[#17BEBB] flex items-center justify-center shadow-sm"
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" fill="white" opacity="0.9" />
        <circle cx="9" cy="10" r="1.2" fill="#1B998B" />
        <circle cx="15" cy="10" r="1.2" fill="#1B998B" />
        <path
          d="M8 14c1.2 1 6.8 1 8 0"
          stroke="#1B998B"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
