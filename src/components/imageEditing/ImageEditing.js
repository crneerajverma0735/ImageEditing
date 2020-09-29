import React, { Component } from 'react';
import polygon from '../../Images/polygon.png';
import triangle from '../../Images/triangle.png';
import rectangle from '../../Images/rectangle.png';
import circle from '../../Images/circle.png';

import 'fabric-webpack';
import Canvas from '../canvasPage/Canvas';
import Circle from '../canvasPage/shapes/Circle';
import Rectangle from '../canvasPage/shapes/Rectangle';
import Polygon from '../canvasPage/shapes/Polygon';
import Triangle from '../canvasPage/shapes/Triangle';
import Text from '../canvasPage/text/Text';
import Images from '../canvasPage/images/Images';


export class ImageEditing extends Component {
    constructor(props) {
        super(props)

        this.downloadRef = React.createRef();

        this.state = {
            circles: [{ radius: 0, top: 0 }],
            rectangles: [{ width: 0, height: 0 }],
            polygons: [{ width: 0, height: 0 }],
            triangles: [{ width: 0, height: 0 }],
            texts: [{ fontsize: 0, width: 0 }],
            font: ""
        }
    }

    componentDidMount = () => {
    }


    addShape = (e, shapeName) => {
        let val;
        switch (shapeName) {
            case "circles":
                val = { radius: 30, top: 200 };
                break;
            case "rectangles":
                val = { width: 100, height: 70 };
                break;
            case "triangles":
                val = { width: 80, height: 80 };
                break;
            case "polygons":
                val = { width: 100, height: 100 };
                break;
            case "texts":
                val = { fontSize: this.state.font, width: 50 };
                break;
            default:
                val = {}
                break;
        }

        console.log(shapeName);

        this.setState({
            [shapeName]: this.state[shapeName].push(val),
            ...this.state
        })
    }

    downloadImage = () => {
        this.downloadRef.current.download_img();
    }

    render() {
        return (
            <div className="main_canvas">
                <div className="canvas" id="canvas_hw" >
                    <Canvas src={this.props.location.state.imgSrc} ref={this.downloadRef}>
                        <Images url={this.props.location.state.imgSrc} scale={1.0} top={0} left={0} />
                        {/* <Circle radius={20} top={200} /> */}
                        {/* <Rectangle width={100} height={100} fill="blue" />
                        <Polygon width={100} height={100} />
                        <Triangle width={50} height={50} /> */}


                        {
                            this.state.circles.map((circle, index) => {
                                return (
                                    <Circle
                                        key={index}
                                        top={circle.top}
                                        radius={circle.radius} />
                                )
                            })
                        }

                        {
                            this.state.rectangles.map((rectangle, index) => {
                                return (
                                    <Rectangle
                                        key={index}
                                        width={rectangle.width}
                                        height={rectangle.height} />
                                )
                            })
                        }

                        {
                            this.state.polygons.map((polygon, index) => {
                                return (
                                    <Polygon
                                        key={index}
                                        width={polygon.width}
                                        height={polygon.height} />
                                )
                            })
                        }

                        {
                            this.state.triangles.map((triangle, index) => {
                                return (
                                    <Triangle
                                        key={index}
                                        width={triangle.width}
                                        height={triangle.height} />
                                )
                            })
                        }

                        {
                            this.state.texts.map((text, index) => {
                                return (
                                    <Text
                                        key={index}
                                        width={text.width}
                                        fontsize={parseInt(text.fontSize)} />
                                )
                            })
                        }



                    </Canvas>
                </div>
                <div className="controls">
                    <div className="caption_button">
                        <button
                            onClick={(e) => this.addShape(e, "texts")} >
                            Add Caption</button>
                    </div>
                    <div className="size_text">
                        <input
                            type="text"
                            value={this.state.font}
                            placeholder="Font Size"
                            onChange={(e) => {

                                this.setState({
                                    font: e.target.value
                                })
                            }} />
                    </div>
                    <div className="shape">
                        <div id="rectangle" onClick={(e) => this.addShape(e, "rectangles")}>
                            <img src={rectangle}
                                style={{ "width": "100%", "height": "100%" }}
                                alt="rectangle"
                            />
                        </div>
                        <div id="circle" onClick={(e) => this.addShape(e, "circles")}>
                            <img src={circle}
                                style={{ "width": "100%", "height": "100%" }}
                                alt="circle"
                            />
                        </div>
                        <div id="polygon" onClick={(e) => this.addShape(e, "polygons")}>
                            <img src={polygon}
                                style={{ "width": "100%", "height": "100%" }}
                                alt="polygon"
                            />
                        </div>
                        <div id="triangle" onClick={(e) => this.addShape(e, "triangles")}>
                            <img src={triangle}
                                style={{ "width": "100%", "height": "100%" }}
                                alt="triangle"
                            />
                        </div>
                    </div>
                    <div className="download_button">
                        <button onClick={this.downloadImage}>Download</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ImageEditing
