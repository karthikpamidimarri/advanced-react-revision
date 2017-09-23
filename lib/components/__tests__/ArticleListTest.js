import React from 'react';
import ArticleList from '../ArticleList';
import ReactTestRenderer from 'react-test-renderer';
import {shallow} from 'enzyme';


describe('ArticleListTests',()=>{
  const testProps = {
    articles:{
      a:{id:'a'},
      b:{id:'b'}
    }
  };

  it('renders correctly',()=>{
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
    //console.log(wrapper);
  });
});