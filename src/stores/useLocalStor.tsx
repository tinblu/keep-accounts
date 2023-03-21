import { create } from 'zustand'

interface Local {
  hasReadWelcomes: boolean
  sethasReadWelcomes: (read: boolean) => void
}
const init = localStorage.getItem('hasReadWelcomes')
export const useLocalStor = create<Local>((set, get) => ({
  hasReadWelcomes: init === 'yes',
  sethasReadWelcomes: (read: boolean) => {
    const result = read ? 'yes' : 'no'
    localStorage.setItem('hasReadWelcomes', result)
    set({ hasReadWelcomes: result === 'yes' })
  }
}))
