import Image from "next/image"
import LOGO from "../public/signature.svg"

export function Signature() {
    return (
        <div className="flex flex-col gap-4 justify-start mb-12">
            <p className="font-ligth">Escrito por</p>
            <Image
                src={LOGO}
                alt="Signature"
                width={0}
                height={0}
                sizes="(max-width: 768px) 50px, 
               (max-width: 1200px) 80px, 
               100px"
                className="h-auto max-h-16 w-fit"
                priority
            />
        </div>
    )
}