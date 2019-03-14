import React, { Component } from 'react';
import './WritePosts.css';

class AddPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_url : '',
            image_storage : {},
        }
        this.imagePreviewChange = this.imagePreviewChange.bind(this)
    }

    imagePreviewChange(e) {
        if(e.target.files !== undefined) {
            let file = e.target.files[0]

            if(file !== undefined) {
              if(Object.keys(this.state.image_storage).includes(file.name) === false) {
                let url = window.URL.createObjectURL(file)

                let cover_storage = this.state.image_storage;
                cover_storage[file.name] = url;
                document.getElementById("imageInput").value = "";

                this.setState({
                    image_url: url,
                    image_storage : cover_storage
                });

                    } else {
                        alert('이미 추가된 파일입니다.')
                    }
                }
            }
        };

        imageRemove(e) {
            let image_class = e.target.classList[1];
            let cover_storage = this.state.image_storage;

            let remove_image = window.confirm("첨부된 파일을 삭제하시겠습니까?")

            if(remove_image === true) {
                delete cover_storage[image_class];
                this.setState({
                    image_storage : cover_storage
                })
            }
        }

    render() {
        let image_storage = Object.keys(this.state.image_storage);
        let add_image_size = image_storage.length * 145;

        return(
            // <form>
                <div className="posts_contents">
                    사진 추가하기
                    <div className="add_picture_div">
                    <img
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

            {image_storage.length > 0
                ? <div className="picture_collection"> 
                    <div className="add_images" style={{width:add_image_size}}>
                        {image_storage.map( (el, i) => {
                            return(
                                    <img className={`add_image_url ${el}`} src={this.state.image_storage[el]} key={i} onClick={(e) => this.imageRemove(e)}/>
                            )
                        })
                    }
                    </div>
                </div>
                : null
                }
                </div>
        // </form>
        )
    }

};

export default AddPicture;