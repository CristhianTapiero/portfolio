import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
        <meta name="description" content="Cristhian Tapiero&apersand;s personal portfolio, web developer, junior front end. Systems engineering student." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/martini.webp" />
      </head>
      <body className="dark:bg-brand-500 dark:text-brand-100 bg-brand-100 text-brand-500">
        <div className="flex flex-col relative w-screen h-screen">
          <Toggler/>
          {children}
          <Menu />
        </div>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
}
