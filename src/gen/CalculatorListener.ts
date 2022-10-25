// Generated from src/gen/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


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


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalculatorParser`.
 */
export interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `WsExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterWsExpr?: (ctx: WsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `WsExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitWsExpr?: (ctx: WsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MaxExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMaxExpr?: (ctx: MaxExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MaxExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMaxExpr?: (ctx: MaxExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MinExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMinExpr?: (ctx: MinExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MinExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMinExpr?: (ctx: MinExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpr?: (ctx: NotExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpr?: (ctx: NotExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IncExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIncExpr?: (ctx: IncExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IncExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIncExpr?: (ctx: IncExprContext) => void;

	/**
	 * Enter a parse tree produced by the `DecExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDecExpr?: (ctx: DecExprContext) => void;
	/**
	 * Exit a parse tree produced by the `DecExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDecExpr?: (ctx: DecExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AndExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpr?: (ctx: AndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpr?: (ctx: AndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `OrExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpr?: (ctx: OrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpr?: (ctx: OrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EqExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqExpr?: (ctx: EqExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqExpr?: (ctx: EqExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LessExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessExpr?: (ctx: LessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LessExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessExpr?: (ctx: LessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `GreaterExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGreaterExpr?: (ctx: GreaterExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGreaterExpr?: (ctx: GreaterExprContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpr?: (ctx: BooleanExprContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpr?: (ctx: BooleanExprContext) => void;

	/**
	 * Enter a parse tree produced by the `NumberExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpr?: (ctx: NumberExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpr?: (ctx: NumberExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

