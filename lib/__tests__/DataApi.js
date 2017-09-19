import {data} from '../testData.json';
import DataApi from '../StateApi';

const api = new DataApi(data);

console.log(api);

describe('Data API',() => {
  it('exposes articles as an object',()=>{

    const articles = api.getArticles();
    let articleId = data.articles[0].id;
    let articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  }),

  it('exposes authors as an object',()=>{
    const authors = api.getAuthors();
    let authorId = data.authors[0].id;
    let authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});

