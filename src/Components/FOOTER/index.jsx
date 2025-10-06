import styled from "styled-components"

// SOCIAL MEDIAS
const SOCIALMEDIAS = [
    {
        "ID" : 0,
        "ICON" : "/images/socialmedia/instagram.png",
        "URL": "https://www.instagram.com/welly.escritora/"
    },
    {
        "ID" : 1,
        "ICON" : "/images/socialmedia/twitter.png",
        "URL": "https://x.com/Bey7w7"
    },
    {
        "ID" : 2,
        "ICON" : "/images/socialmedia/tiktok.png",
        "URL": "https://www.tiktok.com/@wellymi7"
    },
    {
        "ID" : 3,
        "ICON" : "/images/socialmedia/bluesky.png",
        "URL": "https://bsky.app/profile/bwelly.bsky.social"
    }
]


export default function Footer_Comp({ISMOBILE}) {

    const SMICON_CSS = styled.div`
        cursor: pointer;
        transition: .1s ease;
        display: flex;
        align-items: center;
        &:hover {
            filter: drop-shadow(0 0 5px white);
            transform: scale(1.08) rotate(8deg);
        }
    `;

    const openSocialMedia = (url) => {
        return window.open(url, `_blank`)
    }

    return(
        <>
            { ISMOBILE === false ? (
                <footer
                    className="fixed-bottom d-flex flex-column align-items-center justify-content-end"
                    style={{
                        width: '100vw',
                        height: `8vh`,
                        minHeight: '8vh',
                        backgroundColor: 'rgb(34, 34, 34)',
                        borderTop: '0.5vw solid rgb(22, 22, 22)',
                        padding: '1vh 0 0 0',
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{gap: '1vw', transform: `translateY(-1vh)`}}
                    >
                        {SOCIALMEDIAS.map((val, ind) => (
                            <SMICON_CSS key={ind}>
                                <img
                                    style={{
                                        width: '3vw',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        display: 'block',
                                    }}
                                    src={val.ICON}
                                    alt="social icon"
                                    onClick={() => {openSocialMedia(val.URL)}}
                                />
                            </SMICON_CSS>
                        ))}
                    </div>
                    <p
                        style={{
                            color: 'rgb(163, 163, 163)',
                            fontSize: 'min(2.2vh, 2.2vw)',
                            margin: 0,
                            textAlign: 'center',
                            width: '100%',
                            lineHeight: 1.2,
                            paddingBottom: '0.5vw',
                            wordBreak: 'break-word',
                        }}
                    >
                        || Estante da Welly |||| Criado pela Clooverland Studios ||
                    </p>
                </footer>
            ) : (
                <footer
                    className="fixed-bottom d-flex flex-column align-items-center justify-content-end"
                    style={{
                        width: '100vw',
                        height: `8vh`,
                        minHeight: '8vh',
                        backgroundColor: 'rgb(34, 34, 34)',
                        borderTop: '2vw solid rgb(22, 22, 22)',
                        padding: '1vh 0 0 0',
                    }}
                >
                    <div
                        className="d-flex justify-content-center align-items-center mb-1"
                        style={{gap: '1vw'}}
                    >
                        {SOCIALMEDIAS.map((val, ind) => (
                            <SMICON_CSS key={ind}>
                                <img
                                    style={{
                                        width: '12vw',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        display: 'block',
                                    }}
                                    src={val.ICON}
                                    alt="social icon"
                                    onClick={() => {openSocialMedia(val.URL)}}
                                />
                            </SMICON_CSS>
                        ))}
                    </div>
                    <p
                        className="mb-1"

                        style={{
                            color: 'rgb(163, 163, 163)',
                            fontSize: 'min(3.3vh, 3.3vw)',
                            margin: 0,
                            textAlign: 'center',
                            width: '100%',
                            lineHeight: 1.2,
                            paddingBottom: '0.5vw',
                            wordBreak: 'break-word',
                        }}
                    >
                        || Estante da Welly |||| Criado pela Clooverland Studios ||
                    </p>
                </footer>
            ) }
        </>
    )
}