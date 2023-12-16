import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import { SampleCard } from "../../components/SampleCard"

export function Home(){
    return (
        <>
        <Header type={PageType.US}/>

            <main className="h-screen py-32 px-default-width" >
            
                <SampleCard/>

            </main>

        </>
 
    )
}