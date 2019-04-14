export interface IDataset {
	label: string;
	borderColor: string;
	fill: boolean;
	backgroundColor?: string;
	hoverBorderColor?: string;
	pointHoverRadius?: number;
	pointRadius?: number;
	borderWidth: number;
	data: number[];
}
