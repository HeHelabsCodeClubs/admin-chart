import React from 'react';
import { render} from 'react-dom';
import AnalyticsChart from '../../src';

function getValues(values) {
    console.log(values);
}

const App = () => (
    <AnalyticsChart
    />
);
render(<App />, document.getElementById("root"));