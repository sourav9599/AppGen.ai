'use client'
import { ThemeProvider } from 'next-themes'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}
