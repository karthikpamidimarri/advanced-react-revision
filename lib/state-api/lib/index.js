class StateApi{

    constructor(rawData){
        this.data ={
            articles:this.mapIntoObject(rawData.articles),
            authors:this.mapIntoObject(rawData.authors)
        }
    }

    mapIntoObject(array){
        return array.reduce((acc,curr)=>{
            acc[curr.id] = curr;
            return acc;
        },{});
    }

    getState(){
        return this.data;
    }
}

export default StateApi;