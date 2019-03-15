import React, { Component } from 'react';
import './WritePosts.css';

class AgreementResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            agreement : false
        }
    }

    render() {
        return(
            <div className="select_result_div">
              <div className="select_result_cancle">
                <a style={{color:'#007aff', textAlign:'left'}}> 취소 </a>
              </div>

              <div className="select_result_save">
                <button
                    className="select_result_save_sumbit"
                    type="sumbit"
                > 저장 </button>
              </div>
            </div>
        )
    }

};

export default AgreementResult;