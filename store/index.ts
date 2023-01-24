import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface StoreState {
  pageScroll: number
  setPageScroll: (value: number) => void
  scrollValue: number
  setScrollValue: (value: number) => void
  logoAnimElHeight: number
  setLogoAnimElHeight: (value: number) => void
  logoAnimElTop: number
  setLogoAnimElTop: (value: number) => void
  lineMaxHeight: number
  setLineMaxHeight: (value: number) => void
  lineGrowthEnabled: Boolean
  setLineGrowthEnabled: (value: Boolean) => void
  serviceSectionHeight: number
  setServiceSectionHeight: (value: number) => void
}

const useLuveStore = create<StoreState>()(
  (set) => ({
    pageScroll: 0,
    setPageScroll: (value) => set((state) => ({
      ...state,
      pageScroll: value
    })),
    scrollValue: 0,
    setScrollValue: (value) => set((state) => ({
      ...state,
      scrollValue: value
    })),
    logoAnimElHeight: 0,
    setLogoAnimElHeight: (value) => set((state) => ({
      ...state,
      logoAnimElHeight: value
    })),
    logoAnimElTop: 0,
    setLogoAnimElTop: (value) => set((state) => ({
      ...state,
      logoAnimElTop: value
    })),
    lineMaxHeight: 0,
    setLineMaxHeight: (value) => set((state) => ({
      ...state,
      lineMaxHeight: value
    })),
    lineGrowthEnabled: true,
    setLineGrowthEnabled: (value) => set((state) => ({
      ...state,
      lineGrowthEnabled: value
    })),
    serviceSectionHeight: 0,
    setServiceSectionHeight: (value) => set((state) => ({
      ...state,
      serviceSectionHeight: value
    }))
  })
)

export default useLuveStore
