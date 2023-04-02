import { useEffect, useRef, useState, useMemo } from 'react'
import { useRouter } from 'next/router'

export const usePrevious = <T, >(value: T) => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const usePathname = (): string => {
  const router = useRouter()
  return router.asPath.split('?')[0]
}

export const useSearchParams = (): URLSearchParams => {
  const router = useRouter()
  const searchParams = useMemo(() => {
    const params = new URLSearchParams(router.asPath.split('?')[1] ?? '')
    return params
  }, [router.asPath])
  return searchParams
}

interface NavigationEvents {
  routeChanged?: ({
    pathname,
    searchParams
  }: {
    pathname: string | null;
    searchParams: URLSearchParams | null;
  }) => void;
}

export const useNavigation = ({ on }: { on?: NavigationEvents }) => {
  const pathname = usePathname()
  const prevPathname = usePrevious(pathname)

  const searchParams = useSearchParams()
  const prevSearchParams = usePrevious(searchParams)

  const { routeChanged } = on || {}
  const [route, setRoute] = useState({ pathname, searchParams })

  useEffect(() => {
    if (
      searchParams?.toString() !== prevSearchParams?.toString() ||
      pathname !== prevPathname
    ) {
      setRoute({ pathname, searchParams })
      routeChanged?.({ pathname, searchParams })
    }
  }, [pathname, prevPathname, prevSearchParams, routeChanged, searchParams])

  return { route }
}
