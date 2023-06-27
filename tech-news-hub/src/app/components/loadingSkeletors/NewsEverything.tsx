import { definedLarge } from '@/app/utils/largeLayoutConfig'
import { skeletorObjConfig } from './config'

export default function LoadingNewsEverything() {
  const skeletor = skeletorObjConfig.classCss
  const repeat = skeletorObjConfig.repeat(5)

  return (
    <div className="grid grid-cols-3 gap-4">
      {repeat.map((_, index) => {
        return (
          <div
            key={index}
            className={`${skeletor} 
              bg-white
              shadow-lg
              rounded-lg
              p-6
              mb-4
              h-96
              ${definedLarge(index) ? 'col-span-2' : 'col-span-1'}
            `}
          >
            <h2 className={`w-3/5 mb-3 ${skeletor}`}></h2>
            <p className={`${skeletor} w-1/3 mb-3`}></p>

            <div className={`${skeletor} w-full rounded h-2/3`}></div>

            <p className={`${skeletor} mt-3 w-1/5`}></p>
          </div>
        )
      })}
    </div>
  )
}
