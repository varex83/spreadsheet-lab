export declare class Cell {
    formula: string;
    output: string;
    constructor(formula: string, output: string);
}
export declare class IndexCellColumns {
    readonly index: string;
    constructor(index: string | number);
    toString(): string;
}
export declare class Spreadsheet {
    cells: Record<string, Cell>;
    currentFocus: string;
    width: number;
    height: number;
    constructor(width: number, height: number);
    getCell(id: string): Cell;
    setCell(id: string, value: Cell): void;
    setCellOutput(id: string, value: string): void;
    setCellFormula(id: string, value: string): void;
    generateEmptySpreadSheet(): void;
    applyCells(): void;
    setCurrentFocus(id: string): void;
    applyFormulaInput(): void;
    focusOut(): void;
    save(): string;
    load(obj: any): void;
    new(width: number, height: number): void;
    private __setCellOutputValue;
    private __setInputFormulaValue;
    private __getInputFormulaValue;
    private __compileCellFormula;
    private __generateIndexes;
}
//# sourceMappingURL=index.d.ts.map