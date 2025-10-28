import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Eron Felix | Desenvolvedor Java Back-end | Spring Boot, PostgreSQL, Redis",
  description: "Desenvolvedor Java Back-end com 1+ ano de experiência em Spring Boot, PostgreSQL, Redis e testes automatizados. Sistemas em produção real. Disponível para oportunidades.",
  keywords: [
    "Desenvolvedor Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "API REST",
    "Back-end Developer",
    "JUnit",
    "Mockito",
    "Java Developer",
    "Eron Felix"
  ],
  authors: [{ name: "Eron Felix de Barros" }],
  creator: "Eron Felix",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-git-main-eron-felixs-projects.vercel.app",
    title: "Eron Felix | Desenvolvedor Java Back-end",
    description: "Desenvolvedor Java especializado em Spring Boot, PostgreSQL e Redis. Sistemas em produção real.",
    siteName: "Eron Felix - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eron Felix | Desenvolvedor Java Back-end",
    description: "Spring Boot • PostgreSQL • Redis • Sistemas em Produção",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://portfolio-git-main-eron-felixs-projects.vercel.app" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}