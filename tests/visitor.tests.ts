import {Cell} from '../src'
import CalculatorVisitorImpl from "../src/visitor";
import {expect} from "chai";
import {Result} from "../src/types/result";

describe('Visitor', () => {
    describe('eq', () => {
        it('true == true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true == true')

            // Then
            expect(result).to.deep.equal(Result.from(true))
        })

        it('true == false should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true == false')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })
    })

    describe('less', () => {
        it('1 < 2 should return true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 < 2')

            // Then
            expect(result).to.deep.equal(Result.from(true))
        })

        it('2 < 1 should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('2 < 1')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })

        it('1 < 1 should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 < 1')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })

        it('0 < true should return true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('0 < true')

            // Then
            expect(result).to.deep.equal(Result.from(true))
        })
    })

    describe('greater', () => {
        it('1 > 2 should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 > 2')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })

        it('2 > 1 should return true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('2 > 1')

            // Then
            expect(result).to.deep.equal(Result.from(true))
        })

        it('1 > 1 should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 > 1')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })

        it('0 > true should return false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('0 > true')

            // Then
            expect(result).to.deep.equal(Result.from(false))
        })
    })

    describe('mmin', () => {
        it('should get min value for 1, 2, 3, 4', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('mmin(1, 2, 3, 4)')

            // Then
            expect(result).to.be.deep.eq(Result.from(1))
        })

        it('should get min value for true and false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('mmin(true, false)')

            // Then
            expect(result).to.be.deep.eq(Result.from(false))
        })
    })

    describe('mmax', () => {
        it('should get max value for 1, 2, 3, 4', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('mmax(1, 2, 3, 4)')

            // Then
            expect(result).to.be.deep.eq(Result.from(4))
        })

        it('should get max value for true and false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('mmax(true, false)')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })
    })

    describe('cell value', () => {
        it('should get cell value', () => {
            // Given
            const cell = new Cell('A1', '1');
            const sheet: Record<string, Cell> = {}

            // When
            sheet['A1'] = new Cell('1', '1')
            sheet['A2'] = cell;
            const visitor = new CalculatorVisitorImpl(sheet)

            // Then
            expect(visitor.getFormulaValue('A2').intValue).to.be.eq(1)
        })
    })

    describe('and', () => {
        it('should return true for true and true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true && true')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })

        it('should return false for true and false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true && false')

            // Then
            expect(result).to.be.deep.eq(Result.from(false))
        })

        it('should return 0 for 1 and 2', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 && 2')

            // Then
            expect(result).to.be.deep.eq(Result.from(0))
        })

        it('should return 0 for 1 and 0', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 && 0')

            // Then
            expect(result).to.be.deep.eq(Result.from(0))
        })
    })

    describe('or', () => {
        it('should return true for true or true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true || true')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })

        it('should return true for true or false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true || false')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })

        it('should return false for false or false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('false || false')

            // Then
            expect(result).to.be.deep.eq(Result.from(false))
        })

        it('should return 3 for 1 and 2', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 || 2')

            // Then
            expect(result).to.be.deep.eq(Result.from(3))
        })

        it('should return 1 for 1 and 0', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1 || 0')

            // Then
            expect(result).to.be.deep.eq(Result.from(1))
        })
    })

    describe('not', () => {
        it('should return false for not true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('!true')

            // Then
            expect(result).to.be.deep.eq(Result.from(false))
        })

        it('should return true for not false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('!false')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })

        it('should return 0 for not 1', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('!1')

            // Then
            expect(result).to.be.deep.eq(Result.from(~1))
        })
    })

    describe('inc', () => {
        it('should return 2 for inc 1', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1++')

            // Then
            expect(result).to.be.deep.eq(Result.from(2))
        })

        it('should return 1 for inc false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('false++')

            // Then
            expect(result).to.be.deep.eq(Result.from(1))
        })

        it('should return 2 for inc true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true++')

            // Then
            expect(result).to.be.deep.eq(Result.from(2))
        })
    })

    describe('dec', () => {
        it('should return 0 for dec 1', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1--')

            // Then
            expect(result).to.be.deep.eq(Result.from(0))
        })

        it('should return -1 for dec false', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('false--')

            // Then
            expect(result).to.be.deep.eq(Result.from(-1))
        })

        it('should return 0 for dec true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true--')

            // Then
            expect(result).to.be.deep.eq(Result.from(0))
        })
    })

    describe('toString', () => {
        it('should return valid string for 1', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('1')

            // Then
            expect(result.toString()).to.be.eq('1')
        })

        it('should return valid string for true', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('true')

            // Then
            expect(result.toString()).to.be.eq('true')
        })
    })

    describe('Complex formula', () => {
        it('should return true for mmin(4, 5, 6) > mmax(1, 2, 3)', () => {
            // Given
            const visitor = new CalculatorVisitorImpl({})

            // When
            const result = visitor.getFormulaValue('mmin(4, 5, 6) > mmax(1, 2, 3)')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })

        it('should work with table values and complex formulas', () => {
            // Given
            let table: Record<string, Cell> = {}

            table['A1'] = new Cell('!true', '')
            table['A2'] = new Cell('!false', '')
            table['A4'] = new Cell('mmax(1, 3, 5)', '')
            table['A5'] = new Cell('mmin(2, 4)', '')
            table['A6'] = new Cell('(A5 < A4) && (A1 || A2)', '')

            const visitor = new CalculatorVisitorImpl(table)

            // When
            const result = visitor.getFormulaValue('A6')

            // Then
            expect(result).to.be.deep.eq(Result.from(true))
        })
    })
})