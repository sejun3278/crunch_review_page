import React, { Component } from 'react';
import './WritePosts.css';

class AddPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_file : '',
            image_url : '',
            image_storage : [],
        }
        this.imagePreviewChange = this.imagePreviewChange.bind(this)
    }

    imagePreviewChange() {
        console.log(document.getElementById('imageInput'))
        console.log(document.getElementById('imageInput').files[0])
        if(document.getElementById('imageInput').files[0] !== undefined) {
            var file = document.getElementById('imageInput').files[0];
            var url = window.URL.createObjectURL(file)

            if(this.state.image_storage.includes(url) === false) {
                this.setState({
                    image_file: file,
                    image_url: url,
                    image_storage: this.state.image_storage.concat([url])
                });
                }
            }
        }

    imageRemove() {
        alert(1)
    }

    render() {
        let add_image_size = this.state.image_storage.length * 150;

        console.log(this.state.image_storage)
        return(
            // <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="posts_contents">
                    사진 추가하기
                    <div className="add_picture_div">
                    <img
                      className="add_picture_image"
                      style={{width: "25px"}}
                      src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-plus-circle-thin.png&r=48&g=104&b=255"
                    />
                </div>
                
                <span className="add_picture_button">
                        <input
                            onChange={ (event) => this.imagePreviewChange(event) }
                            id="imageInput"
                            accept=".jpg,.jpeg,.png,.gif,.bmp"
                            name="pictures"
                            type="file"
                        />
                    </span>

            {this.state.image_file !== '' 
                ? <div className="picture_collection"> 
                    <div className="add_images" style={{width:add_image_size}}>
                    {this.state.image_file !== ''
                        ?
                        this.state.image_storage.map( (el, i) => {
                            return(
                                    <img className="add_image_url" src={el} key={i} onClick={() => this.imageRemove()}/>
                            )
                        })
                        : null
                    } 
                    </div>
                </div>
                : null
            }
                {/* <div className="picture_collection"> 
                    {this.state.image_file !== ''
                        ?
                        this.state.image_storage.map( (el, i) => {
                            {console.log(el)}
                            return(
                                
                                    <img className="add_image_url" src={el} key={i} onClick={() => this.imageRemove()}/>
                            )
                        })
                        : null
                    } 
                    </div>            */}
                </div>
        // </form>
        )
    }

};

export default AddPicture;