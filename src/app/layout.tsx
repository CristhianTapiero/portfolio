import "@/styles/globals.css";
import { Toggler } from "@/components/toggler";
import { Menu } from "@/components/menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Cristhian Tapiero</title>
        <meta name="description" content="Page made by Cristhian Tapiero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/martini.png" />
      </head>
      <body className="dark:bg-brand-500 dark:text-brand-100 bg-brand-100 text-brand-500">
        <div className="flex flex-col relative w-screen h-screen">
          <Toggler/>
          {children}
          <Menu />
        </div>
      </body>
    </html>
  )
}
