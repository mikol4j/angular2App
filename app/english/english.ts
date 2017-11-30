export interface IEnglish{
    Id: number;
    question: string;
    answer: string;
    result: string;

}

export class English implements IEnglish{
    constructor(
    public Id: number,
    public question: string,
    public answer: string,
    public result: string)
    {}

}