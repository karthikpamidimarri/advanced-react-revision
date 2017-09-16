import React from 'react';
import ArticleList from '../ArticleList';
import ReactTestRenderer from 'react-test-renderer';

describe('ArticleListTests',()=>{
  const testProps = {
    articles:{
      a:{id:'a'},
      b:{id:'b'}
    },
    articleActions:{
      lookupAuthor:jest.fn(() => ({}))
    }
  };

  it('renders correctly',()=>{
    const tree = ReactTestRenderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
    console.log(tree);
  });
});