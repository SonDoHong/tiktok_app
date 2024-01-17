import { useState } from "react";

function Home() {
    const [more, setMore] = useState(false)

    return (
        <div style={{paddingBottom: more ? 2000 : 0}}>
            <h2>
                Home page
            </h2>

            <div onClick={() => setMore(!more)}>More</div>
        </div>
    );
}

export default Home;