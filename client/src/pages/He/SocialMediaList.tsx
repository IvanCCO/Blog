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
        // TODO Colocar o link do whatsapp
        {
            url: "https://wa.me/551192015034",
            useDefault: false,
            network: "whatsapp",
        },
        {
            url: "ivanmedeiros0903@outlook.com",
            useDefault: false,
            network: "mailto",
        },
    ]


    return (

        <ul className='grid grid-cols-3 gap-2 absolute'>

            {socialMedias.map((value, index) => (
                // Iterate over the social medias and put on a list
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