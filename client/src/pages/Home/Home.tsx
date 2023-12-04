import { Header } from "../../components/Header";
import { PageType } from "../../data/constants";

export function Home(){
    return (
        <Header type={PageType.US}/>
    )
}