import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
export default function ProjectsLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className=' flex'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
    </>
  )
}
