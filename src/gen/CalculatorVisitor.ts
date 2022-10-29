// Generated from src/gen/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


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
import { Inc2ExprContext } from "./CalculatorParser";
import { BooleanExprContext } from "./CalculatorParser";
import { NumberExprContext } from "./CalculatorParser";
import { IdentifierExprContext } from "./CalculatorParser";
import { CompileUnitContext } from "./CalculatorParser";
import { ExpressionContext } from "./CalculatorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalculatorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalculatorVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `WsExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWsExpr?: (ctx: WsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpr?: (ctx: ParenthesizedExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MaxExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaxExpr?: (ctx: MaxExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MinExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinExpr?: (ctx: MinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IncExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncExpr?: (ctx: IncExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `DecExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecExpr?: (ctx: DecExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpr?: (ctx: EqExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LessExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessExpr?: (ctx: LessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterExpr?: (ctx: GreaterExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `Inc2Expr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInc2Expr?: (ctx: Inc2ExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpr?: (ctx: BooleanExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumberExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpr?: (ctx: NumberExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpr`
	 * labeled alternative in `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CalculatorParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

