import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric


class Triangle extends React.Component {
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
        left: 400,
        width: 0,
        height: 0,
        fill: 'red',
    }

    componentDidMount() {
        const rect = new fabric.Triangle(this.props)
        if (this.props.width > 0)
            this.props.canvas.add(rect)
    }

    render() {
        return null
    }
}

export default Triangle
