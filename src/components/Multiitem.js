import React, { Component } from 'react'
import Content from './Content'
export class Multiitem extends Component {
    static defaultProps={
        category:"general"
    }
    // static propsTypes={
    //     category:this.propsTypes.string,
    // }
    constructor() {
        super();
        this.state = {
            articles: [],
            page:1,
            
        };
    }
  async  componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17&page=3&pageSize=20`
      let data=await fetch(url)
      let parsedata=await data.json()
      console.log(parsedata)
      this.setState({articles:parsedata.articles,totalresult:parsedata.totalresult})
    }
    handleprevious=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17&page=${this.state.page-1}&pageSize=20`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        this.setState({
            page:this.state.page-1,
            articles:parsedata.articles,
    })
    }
    handlenext=async ()=>{
        if(this.state.page+1> Math.ceil(this.state.totalresult/20)){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17&page=${this.state.page+1}&pageSize=20`
        let data=await fetch(url)
        let parsedata=await data.json()
        console.log(parsedata)
        this.setState({
            page:this.state.page+1,
            articles:parsedata.articles,
        })}
        console.log("Next clicked")
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ color: "white" }}><b><i>NewsHunt</i></b>- Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((elements) => {
             return (
       <div className="col-md-4 my-3" key={elements.url}>
                     <Content
               title={elements.title}
              description={elements.description?elements.description.slice(0, 75):""}
              image={elements.urlToImage}
              newsurl={elements.url} />
              </div>
          );
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handleprevious}>previous</button>
                    <button type="button" className="btn btn-success" onClick={this.handlenext}>next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Multiitem;