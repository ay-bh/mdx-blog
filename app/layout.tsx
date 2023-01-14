import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <Link href="/"><h1>Ayush's Blog</h1></Link>
        <p>Welcome to my blog</p>
      </div>
    </header>

  )

  const footer = (
    <footer>
      <div>
      <h3>Made with <strike>Love</strike> a keyboard.<br/>Ayush Bhardwaj</h3>
      </div>
    </footer>

  )

 

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
