//import { Title } from '@material-ui/icons'
import React, { Component } from 'react'
//import News from './News'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imageUrl} className="card-img-top" width="286" height="161" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default NewsItem;
