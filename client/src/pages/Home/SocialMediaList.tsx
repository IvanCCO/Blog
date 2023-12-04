import { url } from 'inspector';
import { SocialIcon } from 'react-social-icons'

type SocialMedia = {
    url: string;
    useDefault?: Boolean;
    bg?: string;
    fg?: string;
    network?: string;
}

export function SocialMediaList() {

    const socialMedias: SocialMedia[] = [
        {
            url: "https://github.com/IvanCCO",
            useDefault: false,
            bg: "#fff",
            fg: "#22272E",
            network: "github",
        }, {
            url: "www.linkedin.com/in/ivan-medeiros-024133241",
        }, {
            url: "https://www.instagram.com/ivan_oliverss/",
        }, {
            url: "https://www.youtube.com/channel/UCGl5UhjdrFYYPryKV5OIsiQ",
        },
    ]


    return (

        <ul className='flex flex-row space-x-5'>
            {socialMedias.map((value, index) => (
                <li key={index}>
                    <SocialIcon
                        url={value.url}
                        {...(!value.useDefault && {
                            bgColor: value.bg, fgColor: value.fg, network: value.network
                        })}
                    />
                </li>
            ))}
        </ul>

    );

}