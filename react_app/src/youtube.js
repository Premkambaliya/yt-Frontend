import './youtbe.css';
import { useState, useEffect } from 'react';

export default function Youtube() {
    const [nav, setnav] = useState([]);
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(() => {
        // Fetch navigation data from your local server
        fetch("https://yt-backend-3w3m.onrender.com/nav")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => {
                setnav(data);
            })
            .catch((error) => console.error("Error fetching navigation data:", error));

        // Initial fetch for trending videos
        fetchVideos('music');
    }, []);

    // Function to fetch videos based on query
    const fetchVideos = (query) => {
        setLoading(true);
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=AIzaSyBdvOZsP-RVXs41NneunABeY0ZXmCIzfls`)
            .then((response) => response.json())
            .then((data) => {
                setVideos(data.items);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching YouTube data:", error);
                setLoading(false);
            });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle search form submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            fetchVideos(searchQuery);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="side">
                {/* Sidebar content */}
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt=""/>
                <img className="youtubelogo" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt=""/><br/>
                <img className="home" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt=""/>
                <p className="sidebar">Home</p>
                {/* Remaining sidebar content */}
            </div>

            <div className="main3">
                <form onSubmit={handleSearchSubmit} style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="search1" onClick={handleSearchSubmit}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search"
                        />
                    </div>
                </form>
                <div className="mic">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt=""/>
                </div>
                {/* Remaining navbar content */}
            </div>

            <div>
                <hr />
                <div className="main2">
                    {videos.map((video) => (
                        <div className="DIV" key={video.id.videoId}>
                            <img
                                className="bodyimage"
                                src={video.snippet.thumbnails.medium.url}
                                alt=""
                            />
                            <img
                                className="logos"
                                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(1).png"
                                alt=""
                            />
                            <p className="name">{video.snippet.title}</p>
                            <span className="detaile">{video.snippet.channelTitle}</span>
                            <img
                                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png"
                                alt=""
                                className="trueimage"
                            />
                            <span className="detaile">1.5M views . 2 days ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
