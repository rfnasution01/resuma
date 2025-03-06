import { listMenu } from '@/dummy'
import { usePathname } from '@/hooks/usePathname'
import { convertToSlug } from '@/utils/formatText'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

export function AsideMenu() {
  const navigate = useNavigate()
  const { firstPathname } = usePathname()

  const isValid = (menu) => {
    if (menu === firstPathname || (menu === 'dashboard' && !firstPathname)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-48">
      {listMenu?.map((item, idx) => (
        <nav
          className={clsx(
            'group flex items-center gap-12 font-sans text-[2.2rem] hover:cursor-pointer',
            {
              'text-[2.4rem] font-bold text-light': isValid(
                convertToSlug(item?.name),
              ),
            },
          )}
          onClick={() => {
            if (item?.name === 'Dashboard') {
              navigate('/')
            } else {
              navigate(convertToSlug(item?.name))
            }
          }}
          key={idx}
        >
          <p className="text-[2.8rem]">{item?.icon}</p>
          <p className="transition-all duration-300 group-hover:text-slate-300">
            {item?.name}
          </p>
        </nav>
      ))}
    </div>
  )
}
