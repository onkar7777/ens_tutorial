import { useRef, useEffect } from 'react';

const VideoPlayer = ({ url }) => {
    const videoRef = useRef();
    const previousUrl = useRef(url);

    useEffect(() => {
        if (previousUrl.current === url) {
            return;
        }

        if (videoRef.current) {
            videoRef.current.load();
        }

        previousUrl.current = url;
    }, [url]);

    return (
        <video  className="vide-player" ref={videoRef} height="400" controls="controls" autoPlay={true} data-reactid=".0.1.0.0">
            <source src={url} type="video/mp4" data-reactid=".0.1.0.0" />
            Your browser does not support the video tag.
        </video>
    )
}
export default VideoPlayer;