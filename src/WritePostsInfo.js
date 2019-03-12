import React, { Component } from 'react';
import './WritePosts.css';

class WritePostsInfo extends Component {

    render() {
        const Data = this.props.Data;
        var placeholder_ment = Data.placeholder
        return(
            <div className="posts_contents">
                <u className="posts_contents_title"> {Data.title} </u>
                <div className="posts_input_border">
                    <input
                        className={Data.class}
                        type={Data.type}
                        name={Data.name}
                        placeholder={placeholder_ment}
                    />
                </div>
            </div>
        )
    }

};

export default WritePostsInfo;