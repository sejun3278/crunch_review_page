import React, { Component } from 'react';
import './WritePosts.css';
import AgreementPage from './AgreementPage.js';


class AgreementDiv extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
              <AgreementPage />
            </div>
        )
    }

};

export default AgreementDiv;