import React, { Component } from 'react';
import './WritePosts.css';
import StarRatingComponent from 'react-star-rating-component';

class WritePostsInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rating : 1
        }
    }

    onStarClick(nextValue) {
        this.setState({ rating: nextValue });
      }

    render() {
        const Data = this.props.Data;
        var placeholder_ment = Data.placeholder
        const { rating } = this.state;

        return(
            <div className="posts_contents">
                <u className="posts_contents_title"> {Data.title} </u>
                <div className="posts_input_border">
                  {Data.name !== "goodsPt" 
                    ? <input
                        className={Data.class}
                        type={Data.type}
                        name={Data.name}
                        placeholder={placeholder_ment}
                    />
                    :   <div className={Data.class} style={{marginLeft:'10px'}}>
                          <StarRatingComponent
                            name="goodsPt" 
                            starCount={5}
                            value={rating}
                            onStarClick={this.onStarClick.bind(this)}
                          />
                        </div>
                    }
                </div>
            </div>
        )
    }

};

export default WritePostsInfo;