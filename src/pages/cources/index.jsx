import { useState, useEffect } from 'react';
import TheTheme from '../../component/Theme';
import { useParams } from 'react-router-dom';
import VideoPlayer from 'react-video-js-player';
import CourceList from './component/courceList';
import { react } from '../../utils/cource';
import VideoPlayerView from './component/video';



const Cources = () => {
    const [vid, setVid] = useState({
        url: 'https://res.cloudinary.com/himblac3f/video/upload/v1641827360/videoplayback_1_vkurlh.mp4',
        icon: 'https://wallpapercave.com/wp/wp9290578.jpg',
        name: 'Chapter 1'
    });

    const playThisVideo = (vd) => {
        // console.log(vd);
        setVid({
            url: vd?.url,
            icon: vd?.icon,
            name: vd?.name
        })
    }


    let { id } = useParams();
    console.log(id);
    var player = {};

    let onPlayerReady = (player) => {
        player = player;
    }

    return (
        <>
            <TheTheme>
                <div className="row">
                    <div className="col-md-9" >
              
                       <VideoPlayerView url={vid?.url} />

                        <h3> {vid?.name} </h3>
                    </div>
                    <div className="col-md-3" >

                        <nav id="sidebar">
                            <div className="sidebar-header">
                                <h4>React Js</h4>
                            </div>
                            <ul className="list-unstyled components">
                                {
                                    react.map((item, i) => (
                                        <CourceList list={item} i={i} playThisVideo={playThisVideo} key={i} />

                                    ))
                                }

                            </ul>
                        </nav>

                    </div>
                </div>
            </TheTheme>
        </>
    )
}

export default Cources;
