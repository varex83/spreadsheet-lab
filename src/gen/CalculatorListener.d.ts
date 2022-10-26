import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
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
export interface CalculatorListener extends ParseTreeListener {
    enterWsExpr?: (ctx: WsExprContext) => void;
    exitWsExpr?: (ctx: WsExprContext) => void;
    enterParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;
    exitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;
    enterMaxExpr?: (ctx: MaxExprContext) => void;
    exitMaxExpr?: (ctx: MaxExprContext) => void;
    enterMinExpr?: (ctx: MinExprContext) => void;
    exitMinExpr?: (ctx: MinExprContext) => void;
    enterNotExpr?: (ctx: NotExprContext) => void;
    exitNotExpr?: (ctx: NotExprContext) => void;
    enterIncExpr?: (ctx: IncExprContext) => void;
    exitIncExpr?: (ctx: IncExprContext) => void;
    enterDecExpr?: (ctx: DecExprContext) => void;
    exitDecExpr?: (ctx: DecExprContext) => void;
    enterAndExpr?: (ctx: AndExprContext) => void;
    exitAndExpr?: (ctx: AndExprContext) => void;
    enterOrExpr?: (ctx: OrExprContext) => void;
    exitOrExpr?: (ctx: OrExprContext) => void;
    enterEqExpr?: (ctx: EqExprContext) => void;
    exitEqExpr?: (ctx: EqExprContext) => void;
    enterLessExpr?: (ctx: LessExprContext) => void;
    exitLessExpr?: (ctx: LessExprContext) => void;
    enterGreaterExpr?: (ctx: GreaterExprContext) => void;
    exitGreaterExpr?: (ctx: GreaterExprContext) => void;
    enterBooleanExpr?: (ctx: BooleanExprContext) => void;
    exitBooleanExpr?: (ctx: BooleanExprContext) => void;
    enterNumberExpr?: (ctx: NumberExprContext) => void;
    exitNumberExpr?: (ctx: NumberExprContext) => void;
    enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
    exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;
    enterCompileUnit?: (ctx: CompileUnitContext) => void;
    exitCompileUnit?: (ctx: CompileUnitContext) => void;
    enterExpression?: (ctx: ExpressionContext) => void;
    exitExpression?: (ctx: ExpressionContext) => void;
}
//# sourceMappingURL=CalculatorListener.d.ts.map