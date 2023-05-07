"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const canvas_fin_chart_1 = __importDefault(require("canvas-fin-chart"));
const CanvasChart = (props) => {
    const { data, options, plugins, width, height } = props;
    const canvasRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!canvasRef.current)
            throw Error('canvasRef is not assigned');
        const context = canvasRef.current.getContext('2d');
        const chart = new canvas_fin_chart_1.default({ context });
        chart.init({
            data,
            options,
            plugins
        });
        return () => {
            chart.destroy();
        };
    }, [data, options, plugins]);
    return (react_1.default.createElement("canvas", { ref: canvasRef, width: width, height: height }));
};
exports.default = CanvasChart;
//# sourceMappingURL=canvas-chart.js.map