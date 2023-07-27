import { skeletorObjConfig } from './config'

export default function LoadingNewsListCategory() {
  const skeletor = skeletorObjConfig.classCss
  const repeat = skeletorObjConfig.repeat(3)

  return (
    <>
      <h1 className={`${skeletor} w-24 my-9`}></h1>
      {repeat.map((_, i) => {
        return (
          <div
            key={i}
            className="animate-pulse bg-white rounded-lg shadow-md p-4 m-2"
          >
            <h2 className={`${skeletor} mb-2`}></h2>
            <p className={`${skeletor} mb-4 w-8/12`}></p>
            <p className={`${skeletor} mt-2 w-12`}></p>
          </div>
        )
      })}
    </>
  )
}
