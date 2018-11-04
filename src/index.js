import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './index.css';

// require('dotenv').config();
const API_YT = process.env.REACT_APP_API_YT;

// Create a new component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch("Surfboards");
    }

    videoSearch (term) {
        YTSearch({ key: API_YT, term }, videos => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo =>
                        this.setState({ selectedVideo })
                    }
                />
            </div>
        );
    }
}

// Render the component on the page
ReactDOM.render(<App />, document.getElementById('root'));
