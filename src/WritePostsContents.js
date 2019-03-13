import React, { Component } from 'react';
import './WritePosts.css';

class WritePostsContents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pubilc : false
        }
    }

    render() {
        return(
            <div className="posts_contents contents_div">
                내용
                <div className="checkbox_div">
                     <input
                         type="checkbox"
                         checked={this.state.pubilc}
                     />
                     <label className="check_lavel" onClick={() => this.setState({pubilc : !this.state.pubilc})} htmlFor="checkbox"></label>
                     <b className="public_title"> 비공개 </b>
                </div>

                <div className="checkbox_contents">
                  <textarea
                   name="contents"
                   minLength='5'
                   cols="42"
                   rows="10"
                   placeholder="(5자 이상 입력해주세요.)"
                   className="contents_textarea"
                  />
                </div>
            </div>
        )
    }

};

export default WritePostsContents;