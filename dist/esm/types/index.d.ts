import { Data, InputOptions, Dataset, ExtendedDataset, InputPlugin } from 'canvas-fin-chart/dist/esm/types';
interface CanvasChartProps {
    data: Data;
    options?: InputOptions;
    plugins?: InputPlugin[];
    width?: number;
    height?: number;
}
export type { CanvasChartProps, Data, Dataset, ExtendedDataset, InputOptions, InputPlugin };
