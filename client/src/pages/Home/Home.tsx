import { Header } from "../../components/Header"

export function Home() {

    return (
        <>
            <Header />
            <main className="h-screen bg-he-background px-page-default space-y-10 pt-24" >

                <div className="h-80 border-2 border-red-500 font-jomolhari flex justify-between">
                    <div className="flex flex-col justify-center w-1/2">
                        <div className="text-md text-white">
                            <p>Hi there, i am</p>
                        </div>
                        <div>
                            <p className="text-7xl text-white leading-tight" >Ivan Miranda, Software Enginner</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-slate-600 w-1/2 h-full rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm"></div>
                </div>
            </main>

        </>

    )

}