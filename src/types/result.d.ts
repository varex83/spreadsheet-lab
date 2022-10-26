export declare class Result {
    isBool: boolean;
    isInt: boolean;
    booleanValue: boolean;
    intValue: number;
    constructor(value: boolean | number);
    static from(value: boolean | number): Result;
    static default(): Result;
    toString(): string;
    and(b: Result): Result;
    or(b: Result): Result;
    xor(b: Result): Result;
    not(): Result;
    eq(b: Result): Result;
    notEq(b: Result): Result;
    greater(b: Result): Result;
    less(b: Result): Result;
    inc(): Result;
    dec(): Result;
}
//# sourceMappingURL=result.d.ts.map