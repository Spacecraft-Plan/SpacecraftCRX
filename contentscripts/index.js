import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import DayStatistics from './DayStatistics';

import React from 'react';
import Togggle from './Togggle';

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

render(
    <AppContainer>
        <Togggle />
    </AppContainer>
    , document.getElementById('js-toggle'));