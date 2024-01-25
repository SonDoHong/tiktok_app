import { useState } from "react";
import VideoProvider from "../../component/VideoProvider/VideoProvider";

function Home() {
    const [more, setMore] = useState(false)

    return (
        <div style={{paddingBottom: more ? 2000 : 0}}>
            <VideoProvider />

            <div onClick={() => setMore(!more)}>More</div>
        </div>
    );
}

export default Home;