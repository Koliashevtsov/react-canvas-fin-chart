import { Data, InputOptions } from 'canvas-fin-chart/dist/types';

interface CanvasChartProps  {
    data: Data;
    options?: InputOptions;
    width?: number;
    height?: number;
}

export type {
    CanvasChartProps,
    Data,
    InputOptions
}