import React from 'react';
import { createCanvas, Canvas } from 'canvas';
import obelisk from 'obelisk.js';
import { element } from 'prop-types';
// const {createCanvas,loadImage} = require('canvas')
// const canvas = createCanvas(200,200);
export default class Cube extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // width: this.props.width,
            // height: this.props.height,
            size: 10,
            points: this.props.points,
        };
        this.threshold = 130;
        this.defaultColor = 0xCCFF00;
        this.cubeColors = [
            new obelisk.CubeColor().getByHorizontalColor(0xebedf0),
            new obelisk.CubeColor().getByHorizontalColor(0xc6e48b),
            new obelisk.CubeColor().getByHorizontalColor(0x7bc96f),
            new obelisk.CubeColor().getByHorizontalColor(0x239a3b),
            new obelisk.CubeColor().getByHorizontalColor(0x196127)
        ];
        // this.points = [
        // [0, 0, 12, '#ebedf0'], [10, 0, 3, '#ebedf0'], [11, 0, 3, '#ffee4a'], [12, 0, 3, '#ffc501'], [15, 0, 9, '#ffc501'],
        // [0, 13], [10, 13], [11, 13], [12, 13],
        // [0, 13 * 2], [10, 13 * 2], [11, 13 * 2], [12, 13 * 2],
        // [0, 13 * 3], [10, 13 * 3], [11, 13 * 3], [12, 13 * 3],
        // [0, 13 * 4], [10, 13 * 4], [11, 13 * 4], [12, 13 * 4],
        // [0, 13 * 5], [10, 13 * 5], [11, 13 * 5], [12, 13 * 5],
        // [0, 13 * 6], [10, 13 * 6], [11, 13 * 6], [12, 13 * 6],
        // ];

    }
    render() {
        return (<canvas id="isometric-contributions" ref="canvas" width="720" height="410" />);
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();

    }
    getCubeColor(fill = '#ebedf0') {
        switch (fill.toLowerCase()) {
            case 'rgb(235, 237, 240)':
            case '#ebedf0':
                return this.cubeColors[0];
            case 'rgb(198, 228, 139)':
            case '#c6e48b':
                return this.cubeColors[1];
            case 'rgb(123, 201, 111)':
            case '#7bc96f':
                return this.cubeColors[2];
            case 'rgb(35, 154, 59)':
            case '#239a3b':
                return this.cubeColors[3];
            case 'rgb(25, 97, 39)':
            case '#196127':
                return this.cubeColors[4];
            default:
                if (fill.indexOf('#') !== -1) {
                    return new obelisk.CubeColor().getByHorizontalColor(parseInt('0x' + fill.replace("#", "")));
                }
        };
    }
    updateCanvas() {
        // const ctx = this.refs.canvas.getContext('2d');
        var point = new obelisk.Point(70, 70);
        var pixelView = new obelisk.PixelView(this.refs.canvas, point);

        pixelView.clear();
        this.state.points.forEach(element => {
            // console.info("element:" + element);
            var p3d = new obelisk.Point3D(element[0] * this.state.size + 10, element[1] * this.state.size + 10, 0);
            var cubeColor = this.getCubeColor(element[3])
            var dimensionCube = new obelisk.CubeDimension(this.state.size, this.state.size, element[2]);
            var cube = new obelisk.Cube(dimensionCube, cubeColor, false);
            pixelView.renderObject(cube, p3d);

        });
    }
}
