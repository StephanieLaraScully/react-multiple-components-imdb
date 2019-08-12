import React, {Component} from 'react';
import Film from './Film.js';

class FilmList extends Component {
  render() {
    return(
    <div className="film-list">
      <Film />
    </div>
    )
  }
}

export default FilmList;
