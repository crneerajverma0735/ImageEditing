import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric


class Text extends React.Component {
    static propTypes = {
        canvas: PropTypes.object,
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        fontsize: PropTypes.number.isRequired
    }

    static defaultProps = {
        top: 300,
        left: 300,
        fontsize: 11
    }

    componentDidMount() {
        const text = new fabric.IText('Type Here', {
            left: this.props.left,
            top: this.props.top,
            fontFamily: "cursive",
            fill: 'black',
            fontSize: this.props.fontsize
        })

        if (this.props.width > 0)
            this.props.canvas.add(text)
    }

    render() {
        return null
    }
}

export default Text
