import React from 'react';
import './Calendar.less';
import Cube from './Cube';
import obelisk from 'obelisk.js';
import { createCanvas, Canvas } from 'canvas';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        console.info("data:" + this.props.data.text);
        this.data = this.props.data;
    }
    render() {
        return (
            <div className="ic-contributions-wrapper" >
                {/* <canvas ref="canvas" id="isometric-contributions" width="720" height="410"></canvas> */}
                <Cube points={this.data.points} />
                <span className="ic-footer">
                    <a href="#" class="ic-2d-toggle">Show normal chart below ▾</a>
                </span>

                <div class="ic-stats-block ic-stats-top">
                    <span class="ic-stats-table">
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">1 year total
        <span class="ic-stats-count">453</span>
                                <span class="ic-stats-average">1.24</span> per day
      </span>
                            <span class="ic-stats-meta ic-stats-total-meta">
                                <span class="ic-stats-unit">contributions</span>
                                <span class="ic-stats-date">Oct 21, 2018 — Oct 22, 2019</span>
                            </span>
                        </span>
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">Busiest day
        <span class="ic-stats-count">56</span>
                            </span>
                            <span class="ic-stats-meta">
                                <span class="ic-stats-unit">contributions</span>
                                <span class="ic-stats-date">Oct 26</span>
                            </span>
                        </span>
                    </span>

                </div>

                <div class="ic-stats-block ic-stats-bottom">
                    <span class="ic-stats-table">
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">Longest streak
        <span class="ic-stats-count">10</span>
                            </span>
                            <span class="ic-stats-meta">
                                <span class="ic-stats-unit">days</span>
                                <span class="ic-stats-date">Jun 9 — Jun 18</span>
                            </span>
                        </span>
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">Current streak
        <span class="ic-stats-count">1</span>
                            </span>
                            <span class="ic-stats-meta">
                                <span class="ic-stats-unit">days</span>
                                <span class="ic-stats-date">Oct 21 — Oct 21</span>
                            </span>
                        </span>
                    </span>
                </div>
            </div>

        );
    }

    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();

    }

    updateCanvas() {
        // const ctx = this.refs.canvas.getContext('2d');
        // ctx.fillStyle='black';
        // ctx.fillRect(0,0,this.state.width,this.state.height);
        // var point;
        // if (true) {
        //     point = new obelisk.Point(70,70);
        // } else {
        //     point =new obelisk.Point(110,90);

        // }
        // var pixelView = new obelisk.PixelView(canvas, point);
    }

}