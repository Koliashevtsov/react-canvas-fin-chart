# react-canvas-fin-chart


## Install


Install the dependency

```sh
npm i react-canvas-fin-chart
```
## How to usage
```sh
import { CanvasChart, Data } from 'react-canvas-fin-chart';

const data: Data = {
    datasets: [
        {data: ['20', '13', '18', '26', '20', '25', '92', '30', '45', '55', '60', '20']},
        {data: ['5', '5', '5', '5', '5', '10', '15', '20', '30', '40', '44', '30']}
    ],
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

<CanvasChart data={data}/>
```
## Props
```sh
interface CanvasChartProps  {
    data: Data;
    options?: InputOptions;
    width?: number;
    height?: number;
}

<CanvasChart data={data} width={800} height={450}/>
```

## Extended Dataset
You can use ExtendedDataset type to define specific name and color to each dataset. Name will be 
show on tooltip
```sh
type ExtendedDataset =  {
    data: string[];
    color: string;
    name: string;
}
const data: Data = {
    datasets: [
        {
            data: ['20', '13', '18', '26', '20', '25', '92', '30', '45', '55', '60', '20'],
            color: '#ffffff',
            name: 'chart-1'
        },
        {
            data: ['5', '5', '5', '5', '5', '10', '15', '20', '30', '40', '44', '30'],
            color: 'red',
            name: 'chart-2'
        }
    ],
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};
```

## Customization

It is default options which used in chart config.
You can change it in options property
```sh
const defaultChartOptions: DefOptions = {
    styles: {
        chart: {
            backgroundColor: Color.White,
            color: 'blue',
            lineWidth: 1.2,
            colors: randomColors(data.datasets.length)
        },
        grid: {
            color: Color.Grey,
            lineWidth: 0.2
        },
        labels: {
            color: Color.Grey,
            lineWidth: 0.2,
            font: '14px Arial'
        },
        values: {
            color: Color.Grey,
            lineWidth: 0.2,
            font: '14px Arial'
        },
        boundary: {
            color: Color.Grey,
            lineWidth: 0.2
        },
        cursor: {
            backgroundColor: Color.Blue,
            color: Color.Purple,
            lineWidth: 1,
            font: '14px Arial'
        }
    }
}

const updatedOptions = {
    styles: {
        chart: {
            colors: ['red', 'blue']
        }
    }
}

<CanvasChart data={data} options={updateOptions}/>
```

## License

MIT