export class Result
{
    public isBool: boolean = false
    public isInt: boolean = false
    public booleanValue: boolean = false
    public intValue: number = 0

    constructor(value: boolean | number)
    {
        if (typeof value == 'boolean') {
            this.isBool = true
            this.booleanValue = value
        } else {
            this.isInt = true
            this.intValue = value
        }
    }

    public static from(value: boolean | number): Result {
        return new Result(value)
    }

    public static default(): Result {
        return new Result(0)
    }
    
    public toString()
    {
        if (this.isBool) {
            return this.booleanValue.toString()
        } else {
            return this.intValue.toString()
        }
    }
    
    // Binary operators
    public and(b: Result): Result
    {
        const a = this;

        if (a.isInt && b.isInt)
            return new Result(a.intValue & b.intValue);

        if (a.isInt && b.isBool)
            return new Result(a.intValue & (b.booleanValue ? 1 : 0));

        if (a.isBool && b.isInt)
            return new Result((a.booleanValue ? 1 : 0) & b.intValue);

        return new Result(a.booleanValue && b.booleanValue);
        
    }
    
    public or(b: Result): Result
    {
        const a = this;

        if (a.isInt && b.isInt)
            return new Result(a.intValue | b.intValue);
    
        if (a.isInt && b.isBool)
            return new Result(a.intValue | (b.booleanValue ? 1 : 0));
    
        if (a.isBool && b.isInt)
            return new Result((a.booleanValue ? 1 : 0) | b.intValue);
    
        return new Result(a.booleanValue || b.booleanValue);
    }
    
    public xor(b: Result): Result
    {
        const a = this;

        if (a.isInt && b.isInt)
            return new Result(a.intValue ^ b.intValue);
    
        if (a.isInt && b.isBool)
            return new Result(a.intValue ^ (b.booleanValue ? 1 : 0));
    
        if (a.isBool && b.isInt)
            return new Result((a.booleanValue ? 1 : 0) ^ b.intValue);
    
        return new Result(a.booleanValue !== b.booleanValue);
    }
    
    public not(): Result
    {
        const a = this;

        if (a.isInt)
            return new Result(~a.intValue);
        return new Result(!a.booleanValue);
    }
    
    public eq(b: Result)
    {
        const a = this;

        if (a.isBool && b.isBool && a.booleanValue == b.booleanValue
            || b.isInt && b.isInt && a.intValue == b.intValue
            || a.isBool && b.isInt && a.booleanValue == (b.intValue != 0)
            || a.isInt && b.isBool && (a.intValue != 0) == b.booleanValue)
            return new Result(true);
    
        return new Result(false);
    }
    
    public notEq(b: Result) {
        const a = this;

        if (a.isBool && b.isBool && a.booleanValue == b.booleanValue
            || b.isInt && b.isInt && a.intValue == b.intValue
            || a.isBool && b.isInt && a.booleanValue == (b.intValue != 0)
            || a.isInt && b.isBool && (a.intValue != 0) == b.booleanValue)
            return new Result(false);
        return new Result(true);
    }
    
    public greater(b: Result)
    {
        const a = this;

        let aInt = (a.isInt ? a.intValue : (a.booleanValue ? 1 : 0));
        let bInt = (b.isInt ? b.intValue : (b.booleanValue ? 1 : 0));
    
        return new Result(aInt > bInt);
    }
    
    public less(b: Result)
    {
        const a = this;

        let aInt = (a.isInt ? a.intValue : (a.booleanValue ? 1 : 0));
        let bInt = (b.isInt ? b.intValue : (b.booleanValue ? 1 : 0));
    
        return new Result(aInt < bInt);
    }
    
    public inc()
    {
        let integerValue = (this.isInt ? this.intValue : (this.booleanValue ? 1 : 0));
    
        return new Result(integerValue + 1);
    }
    
    public dec()
    {
        let integerValue = (this.isInt ? this.intValue : (this.booleanValue ? 1 : 0));
    
        return new Result(integerValue - 1);
    }
}