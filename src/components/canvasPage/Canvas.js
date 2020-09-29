import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

const fabric = window.fabric

class Canvas extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired
    }

    static defaultProps = {
        width: 650,
        height: 460,
    }

    state = {
        canvas: null,
        down: ""

    }

    componentDidMount() {
        const canvas = new fabric.Canvas(this.c)
        // canvas.setBackgroundImage(this.props.src, canvas.renderAll.bind(canvas), {
        //     backgroundImageOpacity: 1,
        //     backgroundImageStretch: true,
        //     width: 650,
        //     height: 460,
        // })


        this.setState({
            canvas
        })
    }

    download_img = (e) => {

        console.log(this.state.canvas.toJSON().objects);
        var link = document.createElement('a');
        link.href = this.state.canvas.toDataURL({
            format: 'jpg',
            quality: 1.0,
        })

        link.download = "my-image.png";
        link.click();
    }

    render() {

        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                canvas: this.state.canvas,
            })
        })
        const { width, height } = this.props

        return (
            <Fragment>
                <canvas ref={c => (this.c = c)}
                    width={width}
                    height={height}
                    style={{ "border": "2px solid black" }}
                />
                {this.state.canvas && children}
            </Fragment>
        )
    }
}

export default Canvas
