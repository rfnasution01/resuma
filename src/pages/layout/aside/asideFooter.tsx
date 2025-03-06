import { useNavigate } from 'react-router-dom'

export function AsideFooter() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap items-center gap-12 border-t border-accent pt-32 font-sans">
      <button
        onClick={() => {
          navigate('/about-us')
        }}
        type="button"
        className="transition-all duration-300 hover:text-light hover:underline hover:underline-offset-8"
      >
        About Us
      </button>
      <p>|</p>
      <button
        onClick={() => {
          navigate('/privacy-policy')
        }}
        type="button"
        className="transition-all duration-300 hover:text-light hover:underline hover:underline-offset-8"
      >
        Privacy Policy
      </button>
      <p>|</p>
      <button
        onClick={() => {
          navigate('/donate')
        }}
        type="button"
        className="transition-all duration-300 hover:text-light hover:underline hover:underline-offset-8"
      >
        Donate
      </button>
    </div>
  )
}
