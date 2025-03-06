import { CheckCircleIcon } from '@/assets/icons'
import { DialogCustom } from '@/components/dialogComponents'
import { ListOptionTypes, ListTypesResume } from '@/dummy'
import { useMobile } from '@/hooks/useMobile'
import useToast from '@/hooks/useToast'
import clsx from 'clsx'
import { File, Scroll } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function ChooseResume() {
  const navigate = useNavigate()
  const { isMobile } = useMobile()
  const { showToast } = useToast()

  const [isShow, setIsShow] = useState<boolean>(false)
  const [cv, setCV] = useState<string>()
  const [checked, setChecked] = useState<string>()

  const viewFile = () => {
    const cvName = cv?.slice(4)

    switch (cvName) {
      case 'Chronological CV':
        return '/files/Chronological_CV.pdf'
      case 'Functional CV':
        return '/files/Functional_CV.pdf'
      case 'Combination CV':
        return '/files/Combination_CV.pdf'
      case 'Targeted CV':
        return '/files/Targeted_CV.pdf'
      case 'Infographic CV':
        return '/files/Infographic_CV.pdf'

      default:
        return '/files/Chronological_CV.pdf'
    }
  }

  return (
    <section className="flex w-full flex-col gap-32 pb-32">
      {/* --- Title --- */}
      <p className="font-montserrat text-[3.2rem] font-semibold">Buat Resume</p>
      {/* --- Info --- */}
      <div className="w-full rounded-2xl bg-dark p-16 shadow-lg">
        <h2 className="pb-16 text-center text-[2.4rem] font-bold text-yellow-300">
          ⚔️ Pilih Resume Pilihanmu ⚔️
        </h2>
        <div className="rounded-lg border border-yellow-500 bg-gradient-to-r from-[#2a1e5c] via-[#211951] to-[#171239] shadow-inner">
          <ul className="p-12 text-light">
            {ListOptionTypes?.map((item, idx) => (
              <li key={idx} className="flex items-center gap-12 rounded-lg p-8">
                <p>✅</p>
                <p>{item?.description}</p>
                <p className="text-yellow-200">{item?.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* --- Choose --- */}
      <div className="grid grid-cols-3 gap-48 phones:grid-cols-1">
        {ListTypesResume?.map((item, idx) => (
          <div className="col-span-1" key={idx}>
            <button
              type="button"
              onClick={() => {
                if (checked === item?.name) {
                  setChecked(null)
                } else {
                  setChecked(item?.name)
                }
              }}
              className={clsx(
                'flex h-full flex-col items-start justify-start rounded-b-2xl rounded-t-2x bg-white text-left transition-all duration-300',
                {
                  'hover:shadow-lg': checked !== item?.name,
                  'shadow-xl': checked === item?.name,
                },
              )}
            >
              <div className="flex w-full items-center justify-between gap-32 rounded-t-2x bg-dark p-24 text-[2rem] text-light">
                <p className="text-[2.4rem]">{item?.name}</p>
                <div
                  onClick={() => {
                    setIsShow(true)
                    setCV(item?.name)
                  }}
                  className="flex items-center gap-12 rounded-2xl bg-accent bg-opacity-90 px-16 py-8 transition-all duration-300 hover:bg-opacity-10 hover:text-white"
                >
                  <Scroll size={12} />
                  <p>Lihat</p>
                </div>
              </div>
              <div
                className={clsx(
                  'flex flex-1 flex-col gap-24 rounded-b-2xl border-x-2 border-b-2 p-24 transition-all duration-300',
                  {
                    'border-transparent': checked !== item?.name,
                    'border-dark': checked === item?.name,
                  },
                )}
              >
                <div className="flex items-start gap-12">
                  <p>{item?.suitable?.icon}</p>
                  <p style={{ lineHeight: '130%' }}>
                    <span className="font-bold">{item?.suitable?.name}:</span>{' '}
                    {item?.suitable?.description}
                  </p>
                </div>
                <div className="flex items-start gap-12">
                  <p>{item?.stucture?.icon}</p>
                  <div className="flex flex-col gap-4">
                    <p className="font-bold">{item?.stucture?.name}:</p>
                    <ol className="list-disc pl-32">
                      {item?.stucture?.list?.map((list, index) => (
                        <li
                          key={index}
                          className="py-4"
                          style={{ lineHeight: '130%' }}
                        >
                          {list}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="flex items-start gap-12">
                  <p>{item?.advantages?.icon}</p>
                  <p style={{ lineHeight: '130%' }}>
                    <span className="font-bold">{item?.advantages?.name}:</span>{' '}
                    {item?.advantages?.description}
                  </p>
                </div>
                <div className="flex items-start gap-12">
                  <p>{item?.disadvantages?.icon}</p>
                  <p style={{ lineHeight: '130%' }}>
                    <span className="font-bold">
                      {item?.disadvantages?.name}:
                    </span>{' '}
                    {item?.disadvantages?.description}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-12">
        <button
          type="button"
          onClick={() => {
            if (!checked) {
              showToast('error', 'Silahkan pilih jenis CV')
            } else {
              localStorage.setItem('pilihCV', cv?.slice(4))
              navigate('/buat-resume/pilih-template')
            }
          }}
          className="flex items-center gap-12 rounded-3x bg-primary px-24 py-12 text-white transition-all duration-300 hover:bg-opacity-80"
        >
          <CheckCircleIcon size="18" />
          <p>Selanjutnya</p>
        </button>
      </div>

      <DialogCustom
        isOpen={isShow}
        setIsOpen={setIsShow}
        isMobile={isMobile}
        backgroundColor="bg-secondary"
        width="50%"
        height="90vh"
        headerTitle={
          <p className="border-b pb-16 text-left">Contoh {cv?.slice(3)}</p>
        }
        textContent={
          <div className="flex h-full w-full flex-col gap-12">
            <iframe
              src={viewFile()}
              className="scrollbar h-full w-full overflow-auto rounded-lg"
              title="Chronological CV"
            />
            <div className="flex items-center justify-end gap-0">
              <button
                type="button"
                onClick={() => {
                  setIsShow(false)
                  setCV(null)
                }}
                className="rounded-2xl px-24 py-12 text-primary transition-all duration-300 hover:bg-opacity-80"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsShow(false)
                  setCV(null)
                  setChecked(cv)
                }}
                className="flex items-center gap-12 rounded-3x bg-primary px-24 py-12 text-white transition-all duration-300 hover:bg-opacity-80"
              >
                <File size={12} />
                <p>Pilih</p>
              </button>
            </div>
          </div>
        }
      />
    </section>
  )
}
