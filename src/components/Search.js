import React from 'react';

class Search extends React.Component {
constructor(){
    super()
    this.state={
        value:'',
    };
}

setValue = event => {
this.setState({value: event.target.value});
//this.props.submit(event.target.value);
};

submitForm = event => {
    this.props.submit(this.state.value);
    event.preventDefault();
};

    render (){
return (
    <div>
    <form className="search-form" onSubmit={this.submitForm}>
        <input 
        value={this.state.value}
        onChange={this.setValue}
        className="Search-input" 
        placeholder="search any movie"/>
        <button className="serch-button">Search</button>
    </form>
    </div>
)
    }
}

export default Search;