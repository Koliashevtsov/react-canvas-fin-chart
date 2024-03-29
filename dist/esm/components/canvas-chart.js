import React, { useEffect, useRef } from 'react';
import Chart from 'canvas-fin-chart';
const CanvasChart = (props) => {
    const { data, options, plugins, width, height } = props;
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!canvasRef.current)
            throw Error('canvasRef is not assigned');
        const context = canvasRef.current.getContext('2d');
        const chart = new Chart({ context });
        chart.init({
            data,
            options,
            plugins
        });
        return () => {
            chart.destroy();
        };
    }, [data, options, plugins]);
    return (React.createElement("canvas", { ref: canvasRef, width: width, height: height }));
};
export default CanvasChart;
//# sourceMappingURL=canvas-chart.js.map