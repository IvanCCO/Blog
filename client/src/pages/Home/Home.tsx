import { Header } from "../../components/Header"

export function Home() {

    return (
        <>
            <Header />
            <main className="h-screen bg-he-background px-page-default space-y-10 pt-24" >

                <div className="h-80 border-2 border-red-500 font-jomolhari flex justify-between">

                    <div>
                        <div className="text-md text-white">
                            <p>Hi there, i am</p>
                        </div>
                        <div>
                            <p className="text-7xl text-white leading-tight" >Ivan Miranda, Software Enginner</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-600"></div>
                    </div>
                </div>
            </main>

        </>

    )

}