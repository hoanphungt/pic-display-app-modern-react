import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export default class ImageList extends React.Component {
    render() {
        if (this.props.images === []) return <h1>Loading</h1>
        return (
            <div className='image-list'>
                {this.props.images.map(image => <ImageCard key={image.id} image={image} />)}
            </div>
        )
    }
}