import SkeletonBox from '../../../components/skeleton/SkeletonBox'

export default async function Loading () {
  return (
    <>
      <header className='content-container md:pt-5 px-10 pb-2'>
        <SkeletonBox height='40px' width='120px' />
      </header>
      <main className='content-container flex flex-col lg:flex-row gap-5 md:gap-10 px-4 md:px-10 pb-10'>
        <section className='flex-grow'>
          <article>
            <div className='md:rounded-lg overflow-hidden relative h-[200px] md:h-[300px] lg:h-[545px]'>
              <SkeletonBox height='100%' width='100%' />
            </div>
            <div className='md:translate-y-[-50px] bg-white md:rounded-lg p-4 md:p-5 overflow-hidden md:mx-5 shadow-[0px_20px_20px_10px_#00000024]'>
              <header className='border-b-[1px] pb-2'>
                <div className='pb-2'>
                  <SkeletonBox height='24px' width='200px' />
                </div>
                <SkeletonBox height='36px' width='100%' />
              </header>
              <main className='ck-content my-10 px-1 md:px-10'>
                <SkeletonBox height='16px' width='100%' />
                <SkeletonBox height='16px' width='100%' />
                <SkeletonBox height='16px' width='100%' />
                <SkeletonBox height='16px' width='100%' />
              </main>
              <footer className='border-t-[1px]'>
                <div className='flex flex-col justify-center items-center gap-3 mt-5'>
                  <SkeletonBox height='50px' width='50px' />
                  <SkeletonBox height='20px' width='100px' />
                  <SkeletonBox height='16px' width='100%' />
                </div>
              </footer>
            </div>
          </article>
        </section>
        <aside className='w-full lg:w-[400px] flex-[0_0_400px]'>
          <SkeletonBox height='40px' width='100%' />
          <div className='flex flex-col gap-5 mt-5'>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonBox key={index} height='300px' width='100%' />
            ))}
          </div>
        </aside>
      </main>
    </>
  )
}
