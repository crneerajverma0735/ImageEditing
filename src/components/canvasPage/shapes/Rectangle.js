import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric


export class Rectangle extends React.Component {
    static propTypes = {
        canvas: PropTypes.object,
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        fill: PropTypes.string.isRequired,
    }

    static defaultProps = {
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        fill: 'red',
    }

    componentDidMount() {
        const rect = new fabric.Rect(this.props)
        if (this.props.width > 0)
            this.props.canvas.add(rect)
    }

    render() {
        return null
    }
}

export default Rectangle
