export interface InputType {
	type: string;
	data: string;
	text: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	isError: boolean;
}
