import React, { Component } from 'react';
import './WritePosts.css';

class WritePosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pubilc : false,
            agreement : false
        }
    }

    render() {
      return (
        <form method="POST">
        <div className="posts_div">
            <div className="posts_contents">
                이름
                <div className="posts_input_border">
                    <input
                        className="posts_input_inside"
                        type="text"
                        name="name"
                        placeholder="이름을 입력해주세요."
                    />
                </div>
            </div>

            <div className="posts_contents">
                비밀번호
                <div className="posts_input_border">
                    <input
                        className="posts_input_inside"
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요."
                    />
                </div>
            </div>

            <div className="posts_contents">
                평가
                <div className="posts_input_border">
                    <input
                        className="posts_input_inside"
                        type="text"
                        name="evaluation"
                        placeholder="평가를 해주세요."
                    />
                </div>
            </div>

            <div className="posts_contents">
                제목
                <div className="posts_input_border">
                    <input
                        className="posts_input_inside"
                        type="text"
                        name="title"
                        placeholder="제목을 입력해주세요."
                    />
                </div>
            </div>

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

            <div className="posts_contents">
                사진 추가하기
              <div className="add_picture_div">
                <img
                  className="add_picture_icon"
                  src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-plus-circle-thin.png&r=48&g=104&b=255"
                />
              </div>
            </div>

            <div className="agreement_div">
              <div className="collecting_personal_information_agreement">
                <u className="collecting_personal_information_agreement_notice"> 
                비회원 글작성에 대한 개인정보 수집 및 이용동의
                  <b style={{color:'#007aff'}}> <u> 전체보기 </u> </b>
                </u>
              </div>

              <div className="agreement_checkbox">
                <input
                  type="checkbox"
                  checked={this.state.agreement}
                />
                <label className="agreement_lavel" onClick={() => this.setState({agreement : !this.state.agreement})} htmlFor="checkbox"></label>
                </div>

                <div className="agreement_ment">
                    <u style={{textDecoration:'none'}}> <u style={{color:'#007aff', textDecoration:'none'}}> (필수) </u> 동의합니다. </u>
                  </div>
            </div>

            <div className="select_result_div">
                <div className="select_result_cancle">
                  <a style={{color:'#007aff', textAlign:'left'}}> 취소 </a>
                </div>

                <div className="select_result_save">
                  <a style={{color:'#007aff', textAlign:'right'}}> 저장 </a>
                </div>
            </div>
          </div>
        </form>
      );
    }
  }
  
  export default WritePosts;