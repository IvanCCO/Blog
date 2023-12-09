import { Header } from "../../components/Header"
import ArrowPosts from "./ArrowPosts"
import { SocialMediaList } from "./SocialMediaList"
import mypic from "../../assets/he-pic.jpg"
import { PageType } from "../../data/constants"

const desktopWorking = <>
    <main className="h-full bg-he-background px-page-default space-y-14 pt-24" >

        <div className="font-jomolhari flex justify-between h-4/6">
            <div className="flex flex-col justify-center w-1/2 px-7 space-y-9">

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


export function AboutHe() {

    return (
        <>
            <Header type={PageType.HE} />

            <main className="h-full py-32 bg-he-background px-default-width" >

                <div className="font-jomolhari flex flex-col text-font-black-color space-y-default-heigh">

                    {/* Box apresentaçao, com nome cargo e onde trabalho */}
                    <div className="flex flex-col justify-center space-y-2">
                        <div>
                            <div>
                                <p className="text-md text-white">Hi there, i am</p>
                            </div>
                            <div>
                                <p className="text-5xl leading-tight text-white" >Ivan Miranda, Software Enginner🤙</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-low-text-black font-inter">Currently working at @C6Bank, São Paulo Brasil</p>
                        </div>
                    </div>
                    {/* TODO:  My posts components -> arrow maybe change to something better*/}
                    <div className="flex flex-row">
                        <div className="w-1/2">
                            <SocialMediaList />
                        </div>
                        <div className="w-1/2 h-full">
                            <img
                                src={mypic}
                                alt="Descrição da imagem"
                                className="w-full object-cover rounded-tl-full rounded-bl-full rounded-br-sm rounded-tr-sm"
                            />
                        </div>
                    </div>
                    <ArrowPosts />

                </div>

            </main>

        </>
    )

}
