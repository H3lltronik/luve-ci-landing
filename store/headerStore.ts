import { create } from 'zustand'

interface StoreState {
  mobileMenuOpened: boolean
  setMobileMenuOpened: (value: boolean) => void
}

const useHeaderStore = create<StoreState>()(
  (set) => ({
    mobileMenuOpened: false,
    setMobileMenuOpened: (value) => set((state) => ({
      ...state,
      mobileMenuOpened: value
    }))
  })
)

export default useHeaderStore
