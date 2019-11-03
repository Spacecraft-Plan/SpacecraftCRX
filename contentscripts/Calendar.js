import React from 'react';
import './Calendar.less';
import Cube from './Cube';
import obelisk from 'obelisk.js';
import { createCanvas, Canvas } from 'canvas';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        console.info("data.longestStreak:" + this.props.data.longestStreak.length + "/" + this.props.data.longestStreak.startDate + "/" + this.props.data.longestStreak.endDate);
        console.info("data.curStreak:" + this.props.data.curStreak.length + "/" + this.props.data.curStreak.startDate + "/" + this.props.data.curStreak.endDate);
        console.info("data.yearlyStatic:" + this.props.data.yearlyStatic.count + "/" + this.props.data.yearlyStatic.startDate + "/" + this.props.data.yearlyStatic.endDate);
        console.info("data.peakPoint:" + this.props.data.peakPoint.count + "/" + this.props.data.peakPoint.date);
        this.state = {
            points: this.props.data.points,
            longestStreak: this.props.data.longestStreak,
            curStreak: this.props.data.curStreak,
            yearlyStatic: this.props.data.yearlyStatic,
            peakPoint: this.props.data.peakPoint,
        }
        this.dateOptions = {
            month: "short",
            day: "numeric"
        };
        this.dateWithYearOptions = {
            month: "short",
            day: "numeric",
            year: "numeric"
        };
    }
    getCurStreak() {
        // if (curStreak.length > 0) {
        //     curStreak.startDate = this.formatDateString(curStreak.startDate, dateOptions);
        //     curStreak.endDate = this.formatDateString(curStreak.endDate, dateOptions);
        //     curStreak.datesCurrent = curStreak.startDate + " — " + curStreak.endDate;
        // } else {
        //     curStreak.datesCurrent = "No current streak";
        // }
    }
    formatDateString(dateStr, options) {
        var date, dateParts;
        date = null;
        if (dateStr) {
            dateParts = dateStr.split('-');
            date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], 0, 0, 0).toLocaleDateString('en-US', options);
        }
        return date;
    }
    render() {
        var longestStreakdescDate = this.formatDateString(this.state.longestStreak.startDate, this.dateOptions) + " — " + this.formatDateString(this.state.longestStreak.startDate, this.dateOptions);
        var yearlyDescDate = this.formatDateString(this.state.yearlyStatic.startDate, this.dateWithYearOptions) + "-" + this.formatDateString(this.state.yearlyStatic.endDate, this.dateWithYearOptions);
        var busiestday = this.formatDateString(this.state.peakPoint.date, this.dateOptions)

        return (
            <div className="ic-contributions-wrapper" >
                {/* <canvas ref="canvas" id="isometric-contributions" width="720" height="410"></canvas> */}
                <Cube points={this.state.points} />
                <span className="ic-footer">
                    <a href="#" class="ic-2d-toggle">Show normal chart below ▾</a>
                </span>

                <div class="ic-stats-block ic-stats-top">
                    <span class="ic-stats-table">
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">1 year total
        <span class="ic-stats-count">{this.state.yearlyStatic.count}</span>
                                <span class="ic-stats-average">1.24</span> per day
      </span>
                            <span class="ic-stats-meta ic-stats-total-meta">
                                <span class="ic-stats-unit">contributions</span>
                                <span class="ic-stats-date">{yearlyDescDate ? yearlyDescDate : 'no yeearly static'}</span>
                            </span>
                        </span>
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">Busiest day
        <span class="ic-stats-count">{this.state.peakPoint.count}</span>
                            </span>
                            <span class="ic-stats-meta">
                                <span class="ic-stats-unit">contributions</span>
                                <span class="ic-stats-date">{busiestday ? busiestday : 'No activity found'}</span>
                            </span>
                        </span>
                    </span>

                </div>

                <div class="ic-stats-block ic-stats-bottom">
                    <span class="ic-stats-table">
                        <span class="ic-stats-row">
                            <span class="ic-stats-label">Longest streak
        <span class="ic-stats-count">{this.state.longestStreak.length}</span>
                            </span>
                            <span class="ic-stats-meta">
                                <span class="ic-stats-unit">days</span>
                                <span class="ic-stats-date">{longestStreakdescDate ? longestStreakdescDate : 'No longest streak'}</span>
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