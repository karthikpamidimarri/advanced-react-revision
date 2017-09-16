import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  state ={
    answer : 42
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