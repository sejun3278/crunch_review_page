import React, { Component } from 'react';
import './WritePosts.css';

class AddPicture extends Component {

    render() {
        return(
            <div className="posts_contents">
                사진 추가하기
                <div className="add_picture_div">
                 <img
                   style={{width: "25px"}}
                   src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-plus-circle-thin.png&r=48&g=104&b=255"
                 />
               </div>
            </div>
        )
    }

};

export default AddPicture;