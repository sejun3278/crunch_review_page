import React, { Component } from 'react';
import './WritePosts.css';
import Data from './Review_titles.json';
import WritePostsInfo from './WritePostsInfo.js';
import WritePostsContents from './WritePostsContents.js';
import AddPicture from './AddPicture.js';
import AgreementDiv from './AgreementDiv.js';

class WritePosts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return (
        <form method="POST" action="./example2.php" encType="multipart/form-data">
          <div className="posts_div">
            {Data.map( (el, i) => {
              return(
                <WritePostsInfo Data={el} key={i} />
              )
            })}
            <WritePostsContents />
          </div>
          <AddPicture />
          <AgreementDiv />
        </form>
      );
    }
  }
  
  export default WritePosts;