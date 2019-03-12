import React, { Component } from 'react';
import './WritePosts.css';
import AgreementResult from './AgreementResult.js';

class AgreementPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agreement : false
        }
    }

    render() {
        return(
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

                  <AgreementResult />
            </div>
        )
    }

};

export default AgreementPage;