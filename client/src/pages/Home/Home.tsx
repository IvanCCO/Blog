import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";
import { Card } from "../../components/Card"

export function Home(){
    return (
        <>
        <Header type={PageType.US}/>

            <main className="h-screen py-32 px-default-width" >
            
                <Card/>

            </main>

        </>
 
    )
}