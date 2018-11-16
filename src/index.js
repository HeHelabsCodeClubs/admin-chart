import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import './style.css';

class AnalyticsChart extends Component {
    constructor(props) {
        super(props);
    }
    
    render (){
        const { 
            chartData,
            chartWrapperClass,
            tabOneTitle,
            tabTwoTitle,
            tabThreeTitle
        } = this.props;
        return (
            <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset shadow-box ${chartWrapperClass}`}>
                <Tabs>
                    <TabList>
                        <Tab>{tabOneTitle}</Tab>
                        <Tab>{tabTwoTitle}</Tab>
                        <Tab>{tabThreeTitle}</Tab>
                    </TabList>
                
                    <TabPanel>
                        <div className="chart-component">
                            <LineChart width={700} height={280} data={chartData}>
                                <XAxis dataKey="formated_date"/>
                                <YAxis dataKey=""/>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                <Line type="monotone" dataKey="" stroke="#8884d8" />
                                <Line type="monotone" dataKey="id" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="chart-component">
                            <LineChart width={700} height={280} data={chartData}>
                                <XAxis dataKey="formated_date"/>
                                <YAxis dataKey=""/>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                <Line type="monotone" dataKey="" stroke="#8884d8" />
                                <Line type="monotone" dataKey="id" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="chart-component">
                            <LineChart width={700} height={280} data={chartData}>
                                <XAxis dataKey="formated_date"/>
                                <YAxis dataKey=""/>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                                <Line type="monotone" dataKey="" stroke="#8884d8" />
                                <Line type="monotone" dataKey="id" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
};

export default AnalyticsChart;


