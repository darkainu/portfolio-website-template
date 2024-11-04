'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const isFullBioPage = pathname === '/full-bio'

  if (isFullBioPage) {
    return null
  }

  return <Header />
}
