import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {CalculatorVisitor} from "./gen/CalculatorVisitor";
import {
    AndExprContext,
    BooleanExprContext, CalculatorParser,
    CompileUnitContext,
    DecExprContext,
    EqExprContext,
    ExpressionContext,
    GreaterExprContext,
    IdentifierExprContext,
    IncExprContext,
    LessExprContext,
    MaxExprContext,
    MinExprContext,
    NotExprContext,
    NumberExprContext,
    OrExprContext,
    ParenthesizedExprContext,
    WsExprContext
} from "./gen/CalculatorParser";
import {Result} from "./types/result";
import {ANTLRInputStream, CommonTokenStream} from "antlr4ts";
import {CalculatorLexer} from "./gen/CalculatorLexer";
import {Cell} from "./index";

export default class CalculatorVisitorImpl extends AbstractParseTreeVisitor<Result> implements CalculatorVisitor<Result> {
    protected table: Record<string, Cell>

    constructor(table: Record<string, Cell>) {
        super();

        this.table = table;
    }

    public getFormulaValue(formula: string): Result {
        const input = new ANTLRInputStream(formula)

        const lexer = new CalculatorLexer(input)

        const tokens = new CommonTokenStream(lexer)

        const parser = new CalculatorParser(tokens)

        const tree = parser.compileUnit()

        return this.visitCompileUnit(tree)
    }

    protected defaultResult(): Result {
        return Result.default();
    }

    visitCompileUnit(ctx: CompileUnitContext): Result {
        return this.visit(ctx.expression())
    }

    visitAndExpr(ctx: AndExprContext): Result {
        let left = this.walkLeft(ctx)
        let right = this.walkRight(ctx)

        return left.and(right);
    }

    visitBooleanExpr(ctx: BooleanExprContext): Result {
        let value = ctx.text

        return Result.from(value === 'true');
    }

    visitDecExpr(ctx: DecExprContext): Result {
        return this.visit(ctx.expression()).dec()
    }

    visitEqExpr(ctx: EqExprContext): Result {
        let left = this.walkLeft(ctx)
        let right = this.walkRight(ctx)

        return left.eq(right);
    }

    visitGreaterExpr(ctx: GreaterExprContext): Result {
        let left = this.walkLeft(ctx)
        let right = this.walkRight(ctx)

        return left.greater(right)
    }

    visitIncExpr(ctx: IncExprContext): Result {
        return this.visit(ctx.expression()).inc()
    }

    visitLessExpr(ctx: LessExprContext): Result {
        let left = this.walkLeft(ctx)
        let right = this.walkRight(ctx)

        return left.less(right)
    }

    visitMaxExpr(ctx: MaxExprContext): Result {
        let mx = Result.from(0)

        for (let i = 0; i < ctx.expression().length; i++) {
            const expr = ctx.expression(i);

            let childExpr = this.visit(expr)

            if (childExpr.greater(mx).booleanValue) {
                mx = childExpr
            }
        }

        return mx;
    }

    visitMinExpr(ctx: MinExprContext): Result {
        let mn = Result.from(Number.MAX_VALUE)

        for (let i = 0; i < ctx.expression().length; i++) {
            const expr = ctx.expression(i);

            let childExpr = this.visit(expr)

            if (childExpr.less(mn).booleanValue) {
                mn = childExpr
            }
        }

        return mn;
    }

    visitNotExpr(ctx: NotExprContext): Result {
        let expr = this.visit(ctx.expression())

        return expr.not()
    }

    visitNumberExpr(ctx: NumberExprContext): Result {
        let value = ctx.text;

        return Result.from(Number(value));
    }

    visitOrExpr(ctx: OrExprContext): Result {
        let left = this.walkLeft(ctx)
        let right = this.walkRight(ctx)

        return left.or(right);
    }

    visitParenthesizedExpr(ctx: ParenthesizedExprContext): Result {
        return this.visit(ctx.expression())
    }

    visitWsExpr(ctx: WsExprContext): Result {
        return this.visit(ctx.expression())
    }

    visitIdentifierExpr(ctx: IdentifierExprContext): Result {
        const id = ctx.text;

        return this.getFormulaValue(this.table[id].formula);
    }

    protected walkLeft(ctx: ExpressionContext) {
        return this.visit(ctx.getRuleContext(0, ExpressionContext))
    }

    protected walkRight(ctx: ExpressionContext) {
        return this.visit(ctx.getRuleContext(1, ExpressionContext))
    }

}