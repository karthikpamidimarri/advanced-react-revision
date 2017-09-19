import {data} from '../testData.json';
import StateApi from 'state-api';

const api = new StateApi(data);

describe('Data API',() => {
  it('exposes articles as an object',()=>{

    const articles = api.getState().articles;
    let articleId = data.articles[0].id;
    let articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  }),

  it('exposes authors as an object',()=>{
    const authors = api.getState().authors;
    let authorId = data.authors[0].id;
    let authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});

