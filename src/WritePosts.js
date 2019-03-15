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
    this.state = {
      image_storage : {},
      data : {}
    }
  }

  all_check() {
    let formData = new FormData();
    console.log(this.state.image_storage)

    let image_count = 0;
    for(let key in this.state.image_storage) {
      formData.append(`uploadFileNm${image_count}`, key)
      image_count++;
    }
  }

    render() {
      return (
        <form method="post" action="./example2.php" encType="multipart/form-data" onSubmit={() => this.all_check()}>
          <div className="posts_div">
            {Data.map( (el, i) => {
              return(
                <WritePostsInfo Data={el} key={i} />
              )
            })}
            <WritePostsContents />
          </div>
          <AddPicture image_storage={this.state.image_storage}/>
          <AgreementDiv />
        </form>
      );
    }
  }
  
  export default WritePosts;