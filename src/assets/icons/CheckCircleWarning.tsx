export function CheckCircleWarningIcon({
  color,
  size = '18',
}: {
  color?: string
  size?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5Z"
        fill={color || '#DCE2FB'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7803 6.96967C12.0732 7.26256 12.0732 7.73744 11.7803 8.03033L8.78033 11.0303C8.48744 11.3232 8.01256 11.3232 7.71967 11.0303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L8.25 9.43934L10.7197 6.96967C11.0126 6.67678 11.4874 6.67678 11.7803 6.96967Z"
        fill="#12131A"
      />
    </svg>
  )
}
