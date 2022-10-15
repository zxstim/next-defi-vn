import React from 'react';
import { useTranslation } from 'next-i18next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



export default function M1Predictions() {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");     
    const data = [
        {
            m: 'M1',
            p: 4000,
            c: 2400,
        },
        {
            m: 'M2',
            p: 3000,
            c: 1398,
        },
        {
            m: 'M3',
            p: 2000,
            c: 9800,
        },
        {
            m: 'M4',
            p: 2780,
            c: 3908,
        },
        {
            m: 'M5',
            p: 1890,
            c: 4800,
        },
        {
            m: 'M6',
            p: 2390,
            c: 3800,
        },
        {
            m: 'M7',
            p: 3490,
            c: 4300,
        },
        {
            m: 'M8',
            p: 3490,
            c: 4300,
        },
        {
            m: 'M9',
            p: 3490,
            c: 4300,
        },
        {
            m: 'M10',
            p: 3490,
            c: 4300,
        },
        {
            m: 'M11',
            p: 3490,
            c: 4300,
        },
        {
            m: 'M12',
            p: 3490,
            c: 4300,
        },
    ];

    return (
        <>
            <h2 id="m1">{t('m1')}<button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: m1</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-m1-predictions">{t('explain')}</a>
            <div  style={{ 
            maxWidth: "100%",
            height: "350px",
            overflowX: "auto",
            marginTop: "40px" 
            }}>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="c" stroke="#0088FE" isAnimationActive={false} />
                <Line type="monotone" dataKey="p" stroke="#00C49F" isAnimationActive={false} />
                </LineChart>
            </div>
        </>
    );
}