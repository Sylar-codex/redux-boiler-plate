import './App.css';
import React, { Component } from 'react'
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import Store from './store/Store.js'
export class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className='App'>
          <PostForm />
          <Posts />
        </div>
      </Provider>

    )
  }
}


export default App;
