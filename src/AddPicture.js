import React, { Component } from 'react';
import './WritePosts.css';

class AddPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_file : '',
            image_url : '',
            image_url_storage : [],
            image_file_storage : [],
        }
        this.imagePreviewChange = this.imagePreviewChange.bind(this)
    }

    imagePreviewChange() {
        if(document.getElementById('imageInput').files[0] !== undefined) {
            var file = document.getElementById('imageInput').files[0]
            var url = window.URL.createObjectURL(file)

            if(this.state.image_file_storage.includes(file.name) === false) {
                this.setState({
                    image_file: file,
                    image_url: url,
                    image_file_storage: this.state.image_file_storage.concat([file.name]), 
                    image_url_storage: this.state.image_url_storage.concat([url])
                });

                } else {
                    alert('이미 추가된 파일입니다.')
                }
            }
        }

        imageRemove(e) {
            let cover_url_array = this.state.image_url_storage;
            let cover_file_array = this.state.image_file_storage;

            let image_class = e.target.classList[1];
            let image_index = cover_url_array.indexOf(image_class);

            cover_url_array[image_index] = null;
            cover_file_array[image_index] = null;
            
            let result_url_array = [];
            let result_file_array = [];
            cover_url_array.forEach( (el) => {
                if(el !== null) {
                    result_url_array.push(el);
                }
            })

            result_file_array.forEach( (el) => {
                if(el !== null) {
                    result_file_array.push(el);
                }
            }) 

            this.setState({
                image_url_storage : result_url_array,
                image_file_storage : result_file_array
            })
        }

    render() {
        let add_image_size = this.state.image_url_storage.length * 145;

        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
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

            {this.state.image_url_storage.length > 0
                ? <div className="picture_collection"> 
                    <div className="add_images" style={{width:add_image_size}}>
                    {this.state.image_url_storage.length > 0
                        ?
                        this.state.image_url_storage.map( (el, i) => {
                            return(
                                    <img className={`add_image_url ${el}`} src={el} key={i} onClick={(e) => this.imageRemove(e)}/>
                            )
                        })
                        : null
                    } 
                    </div>
                </div>
                : null
                }
                </div>
        </form>
        )
    }

};

export default AddPicture;