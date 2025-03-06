import { useNavigate } from 'react-router-dom'

export function AsideLogo() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => {
        navigate('/')
      }}
      className="flex items-center gap-16"
    >
      <img
        src="/favicon/logo.png"
        alt="Resuma"
        className="h-[5rem] w-[5rem]"
        loading="eager"
      />
      <p className="font-montserrat text-[3.2rem]">Resuma</p>
    </button>
  )
}
