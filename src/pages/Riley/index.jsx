import { useRef, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { ArrowClockwise } from "react-bootstrap-icons";
import './index.css';

export default function RileyVideo({ ISMOBILE }) {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const replayVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // go back to start
            videoRef.current.play(); // start playing again
        }
    };

    useEffect(() => {
        playVideo();
    }, []);

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
        >
            <video
                ref={videoRef}
                src="/videos/waves.mp4"
                playsInline
                autoPlay
                style={{ width: ISMOBILE ? "100%" : "69vw", margin: "0 auto" }}
            />

            <Button
                onClick={replayVideo}
                className="mt-3"
                variant="none"
                style={{ color: "gold" }}
            >
                <ArrowClockwise
                    id="__button_icon"
                    style={{
                        width: "100%",
                        transform: "translateY(-1px) scale(1.5)",
                    }}
                />
            </Button>
        </div>
    );
}
