import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {

        return (

            <div className="img_caption">
                <img src={this.props.imgName} alt="" style={{ "width": "15rem", "height": "15rem", "display": "block" }} />
                <Link to={{
                    pathname: "/addcaption",
                    state: {
                        imgSrc: this.props.imgName
                    }
                }} className="link_addcaption"> Add Caption</Link>
            </div>


        )
    }
}

export default Images
