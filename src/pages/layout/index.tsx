import { Outlet } from 'react-router-dom'
import { AsideLayout } from './aside'

export default function MainLayout() {
  return (
    <div className="scrollbar flex h-screen w-full overflow-auto bg-primary font-sans text-[2rem]">
      <AsideLayout />
      <section className="scrollbar flex h-full w-full flex-1 flex-col overflow-auto text-primary">
        <div className="flex w-full flex-1 flex-col rounded-tl-[7rem] bg-secondary px-48 pt-48">
          <Outlet />
        </div>
      </section>
    </div>
  )
}
