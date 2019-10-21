import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import DayStatistics from './DayStatistics';

import React from 'react';

export default class Cube extends React.Component {
    render() {
        return (<DayStatistics />);
    }

}
render(
    <AppContainer>
        <Cube />
    </AppContainer>
    , document.getElementById('js-calendar-cube'));

class Togggle extends React.Component {
    render() {
        return (
            <span className="ic-toggle">
                <a href="#" aria-label="normal chart view"
                    data-ic-option="squares"
                    className="ic-toggle-option tooltipped tooltipped-nw squares" />
                <a href="#" aria-label="isometric chart view"
                    data-ic-option="cubes"
                    className="ic-toggle-option tooltipped tooltipped-nw cubes active" />
            </span>
        );
    }
}
render(
    <AppContainer>
        <Togggle />
    </AppContainer>
    , document.getElementById('js-toggle'));