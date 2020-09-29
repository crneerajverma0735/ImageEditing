import React, { Component } from 'react'
import Images from './Images'
import axios from 'axios';

class SearchImages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: "",
            imgSrc: [],
            showError: false
        }
    }

    searchValueChanges = (e) => {
        this.setState({
            searchValue: e.target.value,
            showError: false
        })
    }

    getImages = (e) => {
        e.preventDefault();
        axios.get(`https://pixabay.com/api/?key=18488504-3a0439cddbfc5260708016e7c&q=${this.state.searchValue}&image_type=photo`)
            .then(res => {

                this.setState({
                    imgSrc: res.data.hits
                }, () => {
                    this.setState({
                        showError: true
                    })
                })
            })
            .catch(err => {
                console.log(err);

            })

    }

    render() {
        let { searchValue, imgSrc, showError } = this.state;
        return (
            <div className="container">
                <header>
                    <h4>
                        <span className="name">Name: </span>
                        <span className="name_value">
                            Neeraj Verma
                            </span>
                    </h4>
                    <h4>
                        <span className="email">Email: </span>
                        <span className="email_value">
                            Verma.neeraj735@gmail.com
                            </span>
                    </h4>
                </header>
                <section>
                    <div className="search_box">
                        <form className="form" onSubmit={(e) => this.getImages(e)}>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={e => this.searchValueChanges(e)}
                                name="search"
                                placeholder="Enter Your Search Term"
                            />
                            <span onClick={e => this.getImages(e)}><i className="fa fa-search"></i></span>
                        </form>
                    </div>
                    <div className="images_got">
                        {
                            imgSrc.length > 0 ? (
                                <div className="images_for_grid">{
                                    imgSrc.map(img => <Images key={img.id} imgName={img.largeImageURL} />)
                                }</div>
                            )
                                :
                                searchValue && showError ?
                                    (
                                        <div className="images_error">
                                            <h2>Images are Not Found for : <span className="keyword_error">{searchValue}</span></h2>
                                        </div>
                                    ) :
                                    (
                                        <div className="images_error">
                                            <h2>Please Enter A Keyword for Search Your Images</h2>
                                        </div>
                                    )

                        }
                    </div>
                </section>
            </div>
        )
    }
}

export default SearchImages

