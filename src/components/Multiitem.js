import React, { Component } from 'react'
import Content from './Content'
export class Multiitem extends Component {
    
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }
  async  componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17"
      let data=await fetch(url)
      let parsedata=await data.json()
      console.log(parsedata)
      this.setState({articles:parsedata.articles})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ color: "White" }}><b><i>NewsHunt</i></b>- Top Headlines</h1>
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
                </div>
            </div>
        );
    }
}

export default Multiitem;