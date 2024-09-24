import React, { Component } from 'react';
import Content from './Content';

export class Multiitem extends Component {
    static defaultProps = {
        category: "general"
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0, // Initialize totalResults
        };
    }

    async componentDidMount() {
        await this.fetchArticles();
    }

    fetchArticles = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults // Correctly set totalResults
        });
    }

    handlePrevious = async () => {
        this.setState(prevState => ({ page: prevState.page - 1 }), this.fetchArticles);
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
            return; // Do nothing if there are no more pages
        } else {
            this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchArticles);
        }
        console.log("Next clicked");
    }

    render() {
        const { articles, page, totalResults } = this.state;
        const totalPages = Math.ceil(totalResults / 20); // Calculate total pages

        return (
            <div>
                <div className="container">
                    <h1 style={{ color: "white" }}><b><i>NewsHunt</i></b>- Top Headlines</h1>
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 my-3" key={element.url}>
                                    <Content
                                        title={element.title}
                                        description={element.description ? element.description.slice(0, 75) : ""}
                                        image={element.urlToImage}
                                        newsurl={element.url} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={page <= 1} className="btn btn-success" onClick={this.handlePrevious}>Previous</button>
                        <button type="button" disabled={page >= totalPages} className="btn btn-success" onClick={this.handleNext}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Multiitem;
