import React, {Component} from 'react';
import FilmList from '../components/FilmList.js'

class FilmBox extends Component {
  render() {
    return(
    <div className="film-box">
      <FilmList />
    </div>
    )
  }
}

export default FilmBox;
