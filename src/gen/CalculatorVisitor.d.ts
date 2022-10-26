import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { WsExprContext } from "./CalculatorParser";
import { ParenthesizedExprContext } from "./CalculatorParser";
import { MaxExprContext } from "./CalculatorParser";
import { MinExprContext } from "./CalculatorParser";
import { NotExprContext } from "./CalculatorParser";
import { IncExprContext } from "./CalculatorParser";
import { DecExprContext } from "./CalculatorParser";
import { AndExprContext } from "./CalculatorParser";
import { OrExprContext } from "./CalculatorParser";
import { EqExprContext } from "./CalculatorParser";
import { LessExprContext } from "./CalculatorParser";
import { GreaterExprContext } from "./CalculatorParser";
import { BooleanExprContext } from "./CalculatorParser";
import { NumberExprContext } from "./CalculatorParser";
import { IdentifierExprContext } from "./CalculatorParser";
import { CompileUnitContext } from "./CalculatorParser";
import { ExpressionContext } from "./CalculatorParser";
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
    visitWsExpr?: (ctx: WsExprContext) => Result;
    visitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => Result;
    visitMaxExpr?: (ctx: MaxExprContext) => Result;
    visitMinExpr?: (ctx: MinExprContext) => Result;
    visitNotExpr?: (ctx: NotExprContext) => Result;
    visitIncExpr?: (ctx: IncExprContext) => Result;
    visitDecExpr?: (ctx: DecExprContext) => Result;
    visitAndExpr?: (ctx: AndExprContext) => Result;
    visitOrExpr?: (ctx: OrExprContext) => Result;
    visitEqExpr?: (ctx: EqExprContext) => Result;
    visitLessExpr?: (ctx: LessExprContext) => Result;
    visitGreaterExpr?: (ctx: GreaterExprContext) => Result;
    visitBooleanExpr?: (ctx: BooleanExprContext) => Result;
    visitNumberExpr?: (ctx: NumberExprContext) => Result;
    visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;
    visitCompileUnit?: (ctx: CompileUnitContext) => Result;
    visitExpression?: (ctx: ExpressionContext) => Result;
}
//# sourceMappingURL=CalculatorVisitor.d.ts.map