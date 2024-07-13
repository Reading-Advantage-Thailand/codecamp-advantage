import Footer from '../../components/Footer'

export default function CoursesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
