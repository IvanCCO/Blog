import { Header } from "../../components/Header"
import ArrowPosts from "./ArrowPosts"
import { SocialMediaList } from "./SocialMediaList"
import mypic from "../../assets/he-pic.jpg"

export function Home() {

    return (
        <>
            <Header />
            <main className="h-screen bg-he-background px-page-default space-y-14 pt-24" >

                <div className="border-2 border-red-500 font-jomolhari flex justify-between h-4/6">
                    <div className="flex flex-col justify-center w-1/2 border-2 border-yellow-300 px-7 space-y-9">

                        <div className="space-y-2">
                            <div>
                                <p className="text-xl text-white">Hi there, i am</p>
                            </div>
                            <div>
                                <p className="text-7xl text-white leading-tight" >Ivan Miranda, Software Enginner🤙</p>
                            </div>
                            <div>
                                <p className="text-md text-low-text-black font-inter">Currently working at @C6Bank, São Paulo Brasil</p>
                            </div>

                        </div>
                        <ArrowPosts />
                        <SocialMediaList />

                    </div>
                    <div className="flex items-center bg-slate-100 w-1/2 rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm overflow-hidden max-h-fit">
                        <img
                            src={mypic}
                            alt="Descrição da imagem"
                            className="w-full h-full object-cover rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm"
                        />
                    </div>

                </div>
            </main>

        </>

    )

}