import React, { useEffect, useRef } from 'react';

import Chart from 'canvas-fin-chart';

import { CanvasChartProps } from '../types';

const CanvasChart: React.FC<CanvasChartProps> = (props) => {
    const { data, options, plugins, width, height } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) throw Error('canvasRef is not assigned');
        
        const context = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
        const chart = new Chart({context});
        
        chart.init({
            data,
            options,
            plugins
        })

        return () => {
            chart.destroy()
        }
    }, [data, options, plugins])

    return (
        <canvas ref={canvasRef} width={width} height={height}>

        </canvas>
    )
}

export default CanvasChart;