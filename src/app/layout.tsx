import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { AppKnockProviders } from '@/app/knock-provider'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'SmartBid.com',
	description: 'A place for auction anything',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<SessionProvider>
					<AppKnockProviders>
						<Header />
						<div className='container mx-auto py-12'>{children}</div>
					</AppKnockProviders>
				</SessionProvider>
			</body>
		</html>
	)
}
