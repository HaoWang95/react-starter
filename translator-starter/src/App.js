//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Faker from 'faker';
import SearchBar from './components/SearchBar'
//import axios from 'axios';
import searchImage from './api/unsplash'
import ImageList from './components/ImageList';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {images: []}
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  // in the root hierarchy, this function will be binded and passed as props into child component
  async onSearchSubmit(search) {
    //console.log(search)
    await searchImage.get('/search/photos',
      {
        params: { query: search },
      }
    ).then(
      resp => {
        //console.log(resp.data.results)
        this.setState({images: resp.data.results})
      }
    )
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export function Comment() {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={Faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            name
          </a>
          <div className='metadata'>
            <span className='date'>
              time
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export class AppTest extends React.Component {

}

export default App;
