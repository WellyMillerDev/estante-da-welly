import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import $ from "jquery";

// IMAGES
import header_image from "../../assets/header.png"
import background_image from "../../assets/bg.png"
import subbackground_image from "../../assets/bg_bottom.png"

import SMICONS_TIKTOK from "../../assets/socialmedia/tiktok.png"
import SMICONS_INSTAGRAM from "../../assets/socialmedia/instagram.png"
import SMICONS_BLUESKY from "../../assets/socialmedia/bluesky.png"
import SMICONS_TWITTER from "../../assets/socialmedia/twitter.png"

// ISMOBILE
const ISMOBILE = /iphone|ipad|ipod|android|windows phone/i.test(navigator.userAgent);

// SOCIAL MEDIAS
const SOCIALMEDIAS = [
    {
        "ID" : 0,
        "ICON" : SMICONS_INSTAGRAM,
        "URL": "https://www.instagram.com/welly.escritora/"
    },
    {
        "ID" : 1,
        "ICON" : SMICONS_TWITTER,
        "URL": "https://x.com/Bey7w7"
    },
    {
        "ID" : 2,
        "ICON" : SMICONS_TIKTOK,
        "URL": "https://www.tiktok.com/@wellymi7"
    },
    {
        "ID" : 3,
        "ICON" : SMICONS_BLUESKY,
        "URL": "https://bsky.app/profile/bwelly.bsky.social"
    }
]

export default function Home() {

    const SMICON_SIZE = ISMOBILE ? (.4) : (.55);
    const SMICON_DIST = ISMOBILE ? ("10px") : ("20px");
    const SMICON_CSS = styled.div`
        transform: scale(${SMICON_SIZE});
        cursor: pointer;
        margin-bottom: ${SMICON_DIST};

        &:hover {
            transform: scale(${SMICON_SIZE+.05});
        }  
    `;

    const openSocialMedia = (url) => {
        return window.open(url, `_blank`)
    }

    return (
        <>
        
            <main className="wrapper">
                {/* Header */}
                <Container className="d-flex justify-content-center align-items-center w-100 mt-3">

                    { ISMOBILE ? (
                        <img className="mt-3" style={{transform: `translateX(-10px)`}} width={800} src={header_image} />
                    ) : (
                        <img className="w-75 mt-3" src={header_image} />
                    ) }

                </Container>

                {/* Footer */}
                <div className="fixed-bottom d-flex justify-content-center align-items-center" style={{width: `100vw`, height: `${ISMOBILE ? (`2rem`) : (`3rem`)}`, backgroundColor: "rgb(34, 34, 34)", borderTop: `${ISMOBILE ? (`5px`) : (`10px`)} solid rgb(22, 22, 22)`}}>

                    {
                        SOCIALMEDIAS.map((val, ind) => (
                            <SMICON_CSS><img src={val.ICON} onClick={() => {openSocialMedia(val.URL)}} className="mb-5" /></SMICON_CSS>
                        ))
                    }

                </div>


            </main>

        </>
    )
}