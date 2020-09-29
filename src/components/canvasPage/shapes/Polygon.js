import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric


class Polygon extends React.Component {
    static propTypes = {
        canvas: PropTypes.object,
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        fill: PropTypes.string.isRequired,
    }

    static defaultProps = {
        top: 100,
        left: 300,
        fill: 'red',

    }

    componentDidMount() {
        const rect = new fabric.Polygon([{ x: 200, y: 10 },
        { x: 250, y: 50 },
        { x: 250, y: 180 },
        { x: 150, y: 180 },
        { x: 150, y: 50 }], this.props)
        if (this.props.width > 0)
            this.props.canvas.add(rect)
    }

    render() {
        return null
    }
}

export default Polygon
