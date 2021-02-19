//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Faker from 'faker';

export function App() {
  return (
    <div>
      <p>占位符</p>
    </div>
  );
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       If I code enough then I will be a better developer.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
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
