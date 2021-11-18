import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <div className="app-header">
                <div className="app-description"></div>
                <div className="app-features"></div>
                <div className="demo-video"></div>
                <div className="app-tutorial"></div>
                <div className="app-engineers">
                    <div className="engineer-amy"></div>
                    <div className="engineer-amber">
                        <div className="amber-profile">
                            <div className="amber-picture-background"></div>
                        </div>
                        <div className="amber-intro"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
