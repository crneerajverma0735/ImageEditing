import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric


class Images extends React.Component {
    static propTypes = {
        canvas: PropTypes.object,
        url: PropTypes.string.isRequired,
        scale: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,

    }

    static defaultProps = {
        scale: 1.0,
    }

    componentDidMount() {

        let canvas = this.props.canvas;
        var imgObj = new Image();

        imgObj.crossOrigin = "Anonymous";
        imgObj.src = this.props.url

        imgObj.onload = function () {

            imgObj.width = 100
            imgObj.height = 100

            var image = new fabric.Image(imgObj, {

                width: 650,
                height: 460,
                evented: false,
                left: 0,
                top: 0,
                scaleX: 1.0,
                scaleY: 1.0
            });

            canvas.add(image)
        }
    }


    render() {
        return null
    }
}

export default Images
