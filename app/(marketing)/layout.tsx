import { Footer } from "./footer"
import { Header } from "./header"
import { ClerkProvider } from '@clerk/nextjs'

type Props = {
    children: React.ReactNode
}


const MarketingLayout = ({ children }: Props) => {
    return(
        <ClerkProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex flex-1 flex-col items-center justify-center">
                    {children}
                </main>
                <Footer />
            </div>
        </ClerkProvider>
    )
}

export default MarketingLayout