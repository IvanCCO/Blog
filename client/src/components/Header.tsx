import { IconInput } from './Input';
import { Logo } from "../components/Logo";
import { PageType } from '../data/constants';

const headerTemplate = (type: PageType) : string => {

    let bg = "#fff"

    switch (type) {

        case 'HE':
            bg = "#000"
            break;
        case 'SHE':
            bg = "#000"
            break;
        case 'US':
            bg = "#000"
            break;

    }

    return bg

}

export function Header(type: typeof PageType) {

    const background = headerTemplate(type)

    const headerItens = () => {
        return (
            <div className="hidden flex flex-row space-x-20 justify-between text-white text-md  place-items-center font-inter text-xl font-light ">
                <div>
                    <p className='cursor-pointer'>She</p>
                </div>
                <div>
                    <p className='cursor-pointer'>Us</p>
                </div>
                <div>
                    <p className='cursor-pointer'>He</p>
                </div>
            </div>
        )
    }

    return (
        <div className="top-0 flex justify-between bg-he-background py-1 px-10">

            <Logo />
            {headerItens()}

            <div className='flex place-items-center'>
                <IconInput />
            </div>

        </div>
    )

}