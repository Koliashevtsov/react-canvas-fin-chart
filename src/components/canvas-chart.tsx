import React, { useEffect, useRef } from 'react';

import Chart from 'canvas-fin-chart';
import { Data, InputOptions } from 'canvas-fin-chart/dist/types';

interface CanvasChartProps  {
    data: Data;
    options: InputOptions;
}

const CanvasChart: React.FC<CanvasChartProps> = (props) => {
    const { data, options } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) throw Error("canvasRef is not assigned");

        const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
        const chart = new Chart({context});

        chart.init({
            data,
            options
        })
    })

    return (
        <canvas ref={canvasRef}>

        </canvas>
    )
}

export default CanvasChart;