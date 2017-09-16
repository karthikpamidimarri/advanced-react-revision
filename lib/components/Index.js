import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  state ={
    answer : 42
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount(){
    this.setState({
      answer : await this.asyncFunc()
    });
  }

  render(){
    return(<h2>Hello ReactJs -- {this.state.answer}</h2>);
  }

}
export default App;

ReactDom.render(
  <App/>,
  document.getElementById('root')
);