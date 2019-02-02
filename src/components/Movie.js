import React, { Component } from 'react';

class Movie extends Component { 
  constructor(props){
    super(props)
  }
  render() {
    return (
     <div className="Movie">
          <p> {this.props.Title}</p>
          <img src={this.props.imgurl}/>
          <p>{this.props.Year}</p>
          <p>{this.props.Descr}</p>
  </div>
    );
  }
}

export default Movie;
