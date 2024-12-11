import React, { useEffect, useState } from "react";
import './youtbe.css';

export default function Youtube() {
    const [videoList, setVideoList] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
   
    const [selectedVideoId, setSelectedVideoId] = useState(null); 
    const fetchVideos = async (searchQuery) => {
        setLoading(true);
        try {
            const API_KEY = 'AIzaSyB24abjhSzCBT713zFdIk2JcwwFyedlN6c';
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${searchQuery}&maxResults=10`);

            if (!response.ok) {
                throw new Error("Failed to fetch data from YouTube API");
            }

            const data = await response.json();

            const formattedData = data.items.map((item) => ({
                id: item.id.videoId,
                img_t: item.snippet.thumbnails.high.url,
                // img_c: item.snippet.thumbnails.default.url,
                detail: item.snippet.title,
                channelname: item.snippet.channelTitle,
                feature: new Date(item.snippet.publishedAt).toLocaleDateString(),
            }));

            setVideoList(formattedData);
        } catch (error) {
            console.error("Error fetching videos:", error);
        } finally {
            setLoading(false);
        }
    };


    const gamesQuery = () => {
        fetchVideos("gaming")
    }

    const shortsQuery = () => {
        fetchVideos("Shorts")
    }

    const SubscriptionQuery = () => {
        fetchVideos("Subscription")
    }
    
    const LibraryQuery = () => {
        fetchVideos("Library")
    }

    const HistoryQuery = () => {
        fetchVideos("History")
    }

    const NewVideosQuery = () => {
        fetchVideos("New Videos")
    }

    const WatchLaterQuery = () => {
        fetchVideos("Watch Later")
    }

    const LikedVideosQuery = () => {
        fetchVideos("Liked Videos")
    }







    const handleSearch = (event) => {
        event.preventDefault();
        fetchVideos(query);
    };

    useEffect(() => {
       
        fetchVideos('React tutorials');
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    const openVideo = (videoId) => {
        setSelectedVideoId(videoId);
    };
    
    const closeVideo = () => {
        setSelectedVideoId(null);
    };

    return (
        <>
            <div className="sidebar">
                <div className="left">
                    <div className="line">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
                            alt="Menu icon"
                        />
                    </div>
                    <div className="go">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
                            alt="YouTube logo"
                        />
                    </div>
                </div>
                {/* Sidebar Navigation */}
                <div className="main1">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
                            alt="Home icon"
                        />
                        <p className="home">Home</p>
                    </div>  
                    <div className="images" onClick={gamesQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
                            alt="Explore icon"
                        />
                        <p className="home">Games</p>
                    </div>
                    <div className="images" onClick={shortsQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
                            alt="Shorts icon"
                        />
                        <p className="home">Short</p>
                    </div>
                    <div className="images" onClick={SubscriptionQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
                            alt="Subscription icon"
                        />
                        <p className="home">Subscription</p>

                    </div>
                </div>
                <div className="navi2">
                    <div className="images" onClick={LibraryQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
                            alt="Library icon"
                        />
                        <p className="home">Library</p>
                    </div>
                    <div className="images" onClick={HistoryQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
                            alt="History icon"
                        />
                        <p className="home">History</p>
                    </div>
                    <div className="images" onClick={NewVideosQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"
                            alt="Your Videos icon"
                        />
                        <p className="home">New Videos</p>
                    </div>
                    <div className="images" onClick={WatchLaterQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"
                            alt="Watch Later icon"
                        />
                        <p className="home">Watch Later</p>
                    </div>
                    <div className="images" onClick={LikedVideosQuery}>
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
                            alt="Liked Videos icon"
                        />
                        <p className="home">Liked Videos</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Show More</p>
                    </div>

                    
                </div>
                <h5>SUBSCRIPTIONS</h5>
                <div className="main3">
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Dev On The Go</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Coke Studio Bangla</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">MKBHD</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Figma</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Liked Videos</p>
                    </div>
                    <div className="images">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
                            alt="Show More icon"
                        />
                        <p className="home">Show More</p>
                    </div>
                </div>


            </div>
            <div className="navbar">
                <input
                    type="text"
                    placeholder="Search"
                    className="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="lens">
                    <div className="icon">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt=""
                            onClick={handleSearch}
                        />
                    </div>
                    <div className="mic">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="create"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" /></div>
                <div className="more"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" /></div>
                <div className="bell"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" /></div>
                <div className="account"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true" alt="" /></div>
            </div>
            <div className="related">
                <button className="active">All</button>
                <button>cook Studio</button>
                <button>UX</button>
                <button>Case Study</button>
                <button>Music</button>
                <button>Bangla Lofi</button>
                <button>Tour</button>
                <button>Saintmartin</button>
                <button>Tech</button>
                <button>IPhone 13</button>
                <button>User Interface Design</button>
            </div>
            <div className="main2">
                {videoList.map((b) => (
                    <div key={b.id} className="thumbnail1" onClick={() => openVideo(b.id)}>
                    <img src={b.img_t} alt={b.detail} height={145} />
                    <div className="information">
                        <div className="videodetail">{b.detail}</div>
                    </div>
                    <div className="channelname">{b.channelname}</div>
                    <div className="views">{b.feature}</div>
                </div>
                
                ))}
            </div>
            {selectedVideoId && (
    <div className="video-modal" onClick={closeVideo}>
        <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
            ></iframe>
            <button className="close-button" onClick={closeVideo}>
                Close
            </button>
        </div>
    </div>
)}
        </>
    );
}
