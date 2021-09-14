import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=29800509ac654edb98cfa78c601982b3&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        console.log(this.state.totalResults)
    }
    handlePreClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=29800509ac654edb98cfa78c601982b3&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    handleNextClick = async () => {
        if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 20)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=29800509ac654edb98cfa78c601982b3&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    render() {
        return (
            <div className="container my-3" >
                <h4>Top Headlines</h4>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePreClick}>&larr; Prev</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>&rarr; Next</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default News
