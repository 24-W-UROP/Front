import {ResponsiveBullet} from '@nivo/bullet';
import React from 'react';

const Graph1 = () => {
    const data = [
        {time : '12:00', value : 10},
        {time : '14:00', value : 20},
        {time : '16:00', value : 15},
    ];

    return (
        <div style = {{ height : '300px', width : '600px'}}>
            <ResponsiveBullet
                data={data}
                keys = {['value']}
                indexBy = "time"
                margin={{top : 50, right : 60, bottom : 50, left : 60}}
                padding={0.3}
                colors = {{scheme: 'category10'}}
                axisTop={null}
                axisRight = {null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding : 5,
                    tickRotation : 0,
                }}
                axisLeft = {{
                    tickSize: 5,
                    tickPadding : 5,
                    tickRotation : 0,
                }}
                labelSkipWidth = {12}
                labelSkipHeight = {12}
                labelTextColor = {{from : 'color', modifiers : [['darker', 1.6]]}}
                legends = {[
                    {
                        dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
                {
                    on : 'hover',
                    style : {
                        itemOpacity : 1,
                    },
                },
            ],
                        
                    },
                ]}
                />
        </div>
    );
};
export default Graph1;
 