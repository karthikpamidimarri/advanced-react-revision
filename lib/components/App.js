import React from 'react';
import StateApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class App extends React.Component{
  state = {
      articles :{},
      authors : {},
      store:{}
  };

  async componentDidMount(){
    const resp = await axios.get('/data');
    const api = new StateApi(resp.data);
    this.setState({
        articles:api.getState().articles,
        authors:api.getState().authors,
        store:api
    })
  }

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext(){
      return{
          store : this.state.store
      }
  };

  render(){
    return(
        <div>
            <SearchBar/>
            <ArticleList
                articles={this.state.articles}
            />
        </div>
    );
  }
}
export default App;