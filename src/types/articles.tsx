export type Location = {
  idArticle: number;
  refERP: string;
  EAN: string;
	description: string;
  length: number;
	width: number;
	heigth: number;
	weigth: number;
  category: string;
  unityOfMeasure: string;
	rateOfConversion: number;
	grossPrice: number;
	buyPrice: number;
  selected: boolean;
};
