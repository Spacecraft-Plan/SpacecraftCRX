import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import Calendar from './Calendar';

import React from 'react';
import Togggle from './Togggle';

export default class CalendarWrapper extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (<Calendar data={this.props.data} />);
    }

}

window.addEventListener('message', function (event) {
    // var data = {};
    // data.points = event.data.points;
    // data.text = event.data.text;
    // render(
    //     <AppContainer>
    //         <CalendarWrapper data={data} />
    //     </AppContainer>
    //     , document.getElementById('js-calendar-cube'));

    // render(
    //     <AppContainer>
    //         <Togggle />
    //     </AppContainer>
    //     , document.getElementById('js-toggle'));
})