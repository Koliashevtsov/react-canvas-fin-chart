import { Data, InputOptions, Dataset, ExtendedDataset } from 'canvas-fin-chart/dist/esm/types';
interface CanvasChartProps {
    data: Data;
    options?: InputOptions;
    width?: number;
    height?: number;
}
export type { CanvasChartProps, Data, Dataset, ExtendedDataset, InputOptions };
