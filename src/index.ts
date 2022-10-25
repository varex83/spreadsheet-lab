import CalculatorVisitorImpl from "./visitor";

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NO_FOCUS = 'NO_FOCUS'

export class Cell {
    formula: string
    output: string

    constructor(formula: string, output: string) {
        this.formula = formula
        this.output = output
    }
}


export class IndexCellColumns {
    readonly index: string

    constructor(index: string | number) {
        if (typeof index == 'string') {
            this.index = index
        } else {
            this.index = __parseIndex(index)
        }
    }


    public toString(): string {
        return `<div class="column-index">${this.index}</div>`
    }
}

function __reverseString(__str: string) {
    return __str
        .split('')
        .reverse()
        .join('')
}

function __parseIndex(index: number): string {
    if (index == 0) {
        return ALPHABET[0]
    }

    const ALPHABET_LEN = ALPHABET.length

    let result = ''

    while (index > 0) {
        result += ALPHABET[index % ALPHABET_LEN]

        index = Math.floor(index / ALPHABET_LEN)
    }

    return __reverseString(result)
}

export class Spreadsheet {
    cells: Record<string, Cell> = {}
    currentFocus: string = NO_FOCUS

    width: number
    height: number

    constructor(width: number, height: number) {
        if (height == 0 || width == 0) {
            throw new Error(`${
                !width && !height 
                    ? 'Width and height' 
                    : !width
                    ? 'Width'
                    : 'Height'} Cannot Be Zero`
            )
        }

        this.width = width
        this.height = height
    }

    // Getters & Setters

    public getCell(id: string) {
        if (this.cells[id] == undefined) {
            this.cells[id] = new Cell('','')
        }

        this.cells[id].output = this.__compileCellFormula(this.cells[id].formula)

        return this.cells[id]
    }

    public setCell(id: string, value: Cell) {
        if (this.cells[id] == undefined) {
            this.cells[id] = new Cell('','')
        }

        this.cells[id] = value
    }

    public setCellOutput(id: string, value: string) {
        if (this.cells[id] == undefined) {
            this.cells[id] = new Cell('','')
        }

        this.cells[id].output = value
    }

    public setCellFormula(id: string, value: string) {
        if (this.cells[id] == undefined) {
            this.cells[id] = new Cell('', '')
        }

        this.cells[id].formula = value
    }

    // Spreadsheet logic

    public generateEmptySpreadSheet() {
        let result = this.__generateIndexes()

        console.log(result)

        document.getElementById('main-spreadsheet')!.innerHTML = result
    }

    public applyCells() {
        this.generateEmptySpreadSheet()

        for (let elementKey in this.cells) {
            this.__setCellOutputValue(elementKey, this.getCell(elementKey).output);
        }
    }

    // Focus

    public setCurrentFocus(id: string) {
        if (this.currentFocus !== NO_FOCUS) {
            this.__setCellOutputValue(id, this.getCell(id).output)
            this.__setCellOutputValue(id, this.getCell(id).output)
        }

        this.currentFocus = id;

        this.__setInputFormulaValue(this.getCell(id).formula)

        this.__setCellOutputValue(id, this.getCell(id).formula)
    }

    public applyFormulaInput() {
        if (this.currentFocus == NO_FOCUS) {
            alert('Error: can`t apply formula to unknown cell\nHelp: click to the cell and type formula in formula input' )
        }

        this.setCellFormula(
            this.currentFocus,
            this.__getInputFormulaValue(this.currentFocus)
        )
    }

    public focusOut() {
        // @ts-ignore
        const value = document.getElementById(this.currentFocus)!.value

        this.setCellFormula(this.currentFocus, value)

        this.__setCellOutputValue(this.currentFocus, this.getCell(this.currentFocus).output)
    }

    // save / load / new
    public save() {
        return JSON.stringify(this)
    }

    public load(obj: any) {
        this.width = obj.width
        this.height = obj.height
        this.cells = obj.cells
        this.currentFocus = NO_FOCUS

        this.applyCells()
    }

    public new(width: number, height: number) {

        this.width = width
        this.height = height
        this.cells = {}
        this.currentFocus = NO_FOCUS

        this.generateEmptySpreadSheet()
    }

    // Private

    private __setCellOutputValue(id: string, value: string) {
        // @ts-ignore
        document.getElementById(id)!.value = value
    }

    private __setInputFormulaValue(value: string) {
        console.log(document.getElementById('formula-view-input'))

        // @ts-ignore
        document.getElementById('formula-view-input')!.value = value
    }

    private __getInputFormulaValue(value: string) {
        console.log(document.getElementById('formula-view-input'))
        // @ts-ignore
        return document.getElementById('formula-view-input')!.value
    }

    private __compileCellFormula(formula: string) {
        const visitor = new CalculatorVisitorImpl(this.cells)

        return visitor.getFormulaValue(formula).toString()
    }

    private __generateIndexes() {
        let result = '<div class="input-group mb-3">\n' +
            '                    <span class="input-group-text">Formula view</span>\n' +
            '                    <input class="formula-view-input col-6" placeholder="Formula view" id="formula-view-input">\n' +
            '                    <button class="apply-formula-view btn btn-primary" id="apply-formula-view">Apply</button>\n' +
            '                </div><div class="column-row-inter"></div>'

        for (let i = 0; i < this.width; i++) {
            result += (new IndexCellColumns(i)).toString()
        }

        for (let i = 0; i < this.height; i++) {
            let rowCells = ''

            for (let j = 0; j < this.width; j++) {
                rowCells += `<input class="spreadsheet-cell" id="${__parseIndex(j)}${i + 1}">`
            }

            result += `<div class="spreadsheet-row"><div class="row-index">${i + 1}</div>${rowCells}</div>\n`
        }

        return result;
    }
}