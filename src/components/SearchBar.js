import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Image Search</label>
                        {/*call back functions including onChange, onClick and onSubmit */}
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={this.onChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;