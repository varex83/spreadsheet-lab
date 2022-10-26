import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { CalculatorVisitor } from "./gen/CalculatorVisitor";
import { AndExprContext, BooleanExprContext, CompileUnitContext, DecExprContext, EqExprContext, ExpressionContext, GreaterExprContext, IdentifierExprContext, IncExprContext, LessExprContext, MaxExprContext, MinExprContext, NotExprContext, NumberExprContext, OrExprContext, ParenthesizedExprContext, WsExprContext } from "./gen/CalculatorParser";
import { Result } from "./types/result";
import { Cell } from "./index";
export default class CalculatorVisitorImpl extends AbstractParseTreeVisitor<Result> implements CalculatorVisitor<Result> {
    protected table: Record<string, Cell>;
    constructor(table: Record<string, Cell>);
    getFormulaValue(formula: string): Result;
    protected defaultResult(): Result;
    visitCompileUnit(ctx: CompileUnitContext): Result;
    visitAndExpr(ctx: AndExprContext): Result;
    visitBooleanExpr(ctx: BooleanExprContext): Result;
    visitDecExpr(ctx: DecExprContext): Result;
    visitEqExpr(ctx: EqExprContext): Result;
    visitGreaterExpr(ctx: GreaterExprContext): Result;
    visitIncExpr(ctx: IncExprContext): Result;
    visitLessExpr(ctx: LessExprContext): Result;
    visitMaxExpr(ctx: MaxExprContext): Result;
    visitMinExpr(ctx: MinExprContext): Result;
    visitNotExpr(ctx: NotExprContext): Result;
    visitNumberExpr(ctx: NumberExprContext): Result;
    visitOrExpr(ctx: OrExprContext): Result;
    visitParenthesizedExpr(ctx: ParenthesizedExprContext): Result;
    visitWsExpr(ctx: WsExprContext): Result;
    visitIdentifierExpr(ctx: IdentifierExprContext): Result;
    protected walkLeft(ctx: ExpressionContext): Result;
    protected walkRight(ctx: ExpressionContext): Result;
}
//# sourceMappingURL=visitor.d.ts.map