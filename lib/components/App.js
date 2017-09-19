import React from 'react';
import StateApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      articles :{},
      authors : {}
    };
  }
  async componentDidMount(){
    const resp = await axios.get('/data');
    const api = new StateApi(resp.data);
    this.setState({
        articles:api.getArticles(),
        authors:api.getAuthors()
    })
  }

  articleActions={
    lookupAuthor : (authorId) => this.state.authors[authorId],
  };
  render(){
    return(
      <ArticleList
        articles={this.state.articles}
        articleActions = {this.articleActions}
      />
    );
  }
}
export default App;