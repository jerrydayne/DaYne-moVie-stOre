import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import spinner from './ajax-loader.gif';
import Search from './Search';


const MOVIE_API_URL ='http://www.omdbapi.com/?s=man&apikey=4a3b711b';

class App extends Component {
  constructor (){
  super ()
  this.state = {
    loading : true,
    movies: [], 
    search: 'baby',

  };
  }

  componentDidMount(){
  this.searchMovie();
  }
  searchMovie(){
    this.setState({loading: true});
    let url=`http://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`;
    
    fetch(url).then(respond => respond.json()).then(jsonrespond => {
      //console.log(jsonrespond)
       this.setState({
        movies: jsonrespond.Search || [],
        loading : false,
        Search : '',
         })

      }).catch(error=>{
        console.log(error);
      })
  }

submitSearch = (value) => {
  this.setState({search: value}, () =>{this.searchMovie()}
  );
};

  render() 
  {
    return (
      <div className="App">
      <Header name="DaYne mooVie stOre (*_*)"/>
      <p className="App-intro">sharing a few of our favourite movies</p>
      <Search submit={this.submitSearch}/>

      {
        this.state.loading? (<img src={spinner}/>) : (
          <div className="appMovies">
      {this.state.movies.map((movies)=>
         
        <Movie
        Title={movies.Title}
        imgurl={movies.Poster}
        Year={movies.Year}
        Desc={movies.Description}
        />
      )}
      </div>
        )
      }
      
      </div>
    )
  }
}
export default App;
