import { AsideFooter } from './asideFooter'
import { AsideMenu } from './asideMenu'
import { AsideLogo } from './asideLogo'

export function AsideLayout() {
  return (
    <aside className="scrollbar flex h-full w-[40rem] flex-col gap-32 overflow-auto px-32 py-48 text-secondary">
      <div className="flex flex-1 flex-col gap-32">
        <AsideLogo />
        <hr className="w-full border border-accent" />
        <AsideMenu />
      </div>
      <AsideFooter />
    </aside>
  )
}
