export class Questionnaire {
    id!: number;
    questionText!: string;
    questionType!: string;
    trivia!: string;
    module!: string;
    choices!: Choice[];
}

export class Choice {
    id!: number;
    name!: string|null|undefined;
    isAnswer!: boolean;
    Question?: Questionnaire;
}