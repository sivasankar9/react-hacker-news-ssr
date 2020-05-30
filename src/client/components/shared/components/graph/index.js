import './style.scss';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import React, {useContext} from 'react';
import HakerNewscontext from '../../context/haker-news-context';
import Label from './graph-label';
import {buildGraphData} from '../../../shared/service/helpers';

export default () => {

    const Consumer = useContext(HakerNewscontext);

    const graphData = buildGraphData(Consumer.hits);

    return (
        <section className='graph-warpper'>
            <LineChart
                width={1200}
                height={300}
                data={graphData}
                fontFamily='sans-serif'
                fontSize='12'
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray='0' />
                <XAxis label={<Label x={28} y={140} label ='Polls'/>} dataKey='name' />
                <YAxis label={<Label x={500} y={300} label ='ID'/>} />
                <Tooltip />
                <Line type='monotone' dataKey='polls' strokeWidth='5' stroke='#4288fd' activeDot={{ r: 8 }} />
            </LineChart>
        </section>
    );

};
