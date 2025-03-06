import { Toaster } from 'react-hot-toast'
import { ChooseResume } from './chooseResume'

export default function BuatResume() {
  return (
    <div className="">
      <ChooseResume />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}
