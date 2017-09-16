class DataApi{

  constructor(rawData){
    this.rawData = rawData;
  }

  mapIntoObject(array){
    return array.reduce((acc,curr)=>{
      acc[curr.id] = curr;
      return acc;
    },{});
  }

  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;