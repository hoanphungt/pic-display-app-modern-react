import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { 
        images: []
    };

    // 1st option to handle an API request using Promise .then() call-back function
    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID d68cd7f16b22a1a01aa2d2ec63a32504f3313adeb7c47df31e181a1c232352c2'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results)
    //     })
    // }

    // 2nd option using async await when doing an API request!!
    // onSearchSubmit = async (term) => {
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         //params to pass on the query
    //         params: { query: term },
    //         //Authorization via access key using header
    //         headers: {
    //             Authorization: 'Client-ID d68cd7f16b22a1a01aa2d2ec63a32504f3313adeb7c47df31e181a1c232352c2'
    //         }
    //     })

    //     this.setState({
    //         images: response.data.results
    //     })
    // }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            //params to pass on the query
            params: { query: term },            
        })

        this.setState({
            images: response.data.results
        })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;