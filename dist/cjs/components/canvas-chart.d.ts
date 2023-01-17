import React from 'react';
import { Data, InputOptions } from 'canvas-fin-chart/dist/types';
interface CanvasChartProps {
    data: Data;
    options: InputOptions;
}
declare const CanvasChart: React.FC<CanvasChartProps>;
export default CanvasChart;
