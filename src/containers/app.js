import React, {Fragment} from 'react';
import axios from 'axios';
import M from 'materialize-css';

import Menu from '../components/Menu';
import PanelMovie from '../components/main/Panel-movie';
import Statistique from '../components/main/Statistiques';
import SearchBar from '../components/main/Search-bar';
import VideoList from './Video-list';
import Video from '../components/main/Video';
import Footer from '../components/Footer';


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=5e4e68888eb13cc840cff42b51e27b0e";
const SEARCH_URL = "search/movie?language=fr&include_adult=false"
const RECOMMENDATION_MOVIE_URL = "recommendations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: [], currentMovie: {}, errorSearch: false}
  }

  componentWillMount() {
    this.initMovies();
  }


  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function (response) {
      this.setState({ moviesList: response.data.results.slice(1, 6), currentMovie: response.data.results[0] }, function () {
        this.applyVideoToCurrentMovie();
      });
    }.bind(this));
  }

  applyVideoToCurrentMovie() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
      if(response.data.videos.results[0] && response.data.videos.results[0].key){
        const youtubeKey = response.data.videos.results[0].key;
        let newCurrentMovieState = this.state.currentMovie;
        newCurrentMovieState.videoId = youtubeKey;
        this.setState({ currentMovie: newCurrentMovieState, errorSearch: false });
      }
    }.bind(this));
  }

  onClickListItem(movie) {
    this.setState({ currentMovie: movie}, function () {
      this.applyVideoToCurrentMovie();
      this.setRecommentation();
    })
  }

  onClickSearch(searchText) {
    if(searchText) {
      axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
        if (response.data && response.data.results[0]) {
          if (response.data.results[0].id !== this.state.currentMovie.id){
            this.setState({
              currentMovie: response.data.results[0],
              errorSearch: false }, () => {
                this.applyVideoToCurrentMovie();
                this.setRecommentation();
              });
          }
        }
      }.bind(this));
    }

  }

  setRecommentation(){
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/${RECOMMENDATION_MOVIE_URL}?${API_KEY}&language=fr`).then(function (response) {
      this.setState({ moviesList: response.data.results.slice(0, 5)});
    }.bind(this));
  }




  render() {
    const renderVideoList = () => {
      if (this.state.moviesList.length >= 5) {
        return <VideoList moviesList={this.state.moviesList} callback={this.onClickListItem.bind(this)} /> //Faire un bind parce que on revient dans une class et on utilise un event
      }
    };


    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {numVisible: 4, dist: -50, padding: 100, });

    return (
      <Fragment>
      <header>
        <Menu />
        </header>
        <main>
        <PanelMovie />
        <Statistique />
        <SearchBar callback={this.onClickSearch.bind(this)}
          error={this.state.errorSearch} />

            <Video videoId={this.state.currentMovie.videoId} imageId={this.state.currentMovie.backdrop_path} description={this.state.currentMovie.overview} title={this.state.currentMovie.title}/>
            <div className="container">
              <div className="row my-class-panel">
                <div className="col s12 my-class-panel-margin">
                  <h5><i className="material-icons">live_tv</i> Similar movies</h5>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </main>

            {renderVideoList()}

   <Footer />


      </Fragment>

    )
  }
}


export default App;
