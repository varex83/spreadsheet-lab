// Generated from src/gen/Calculator.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CalculatorListener } from "./CalculatorListener";
import { CalculatorVisitor } from "./CalculatorVisitor";


export class CalculatorParser extends Parser {
	public static readonly NUMBER = 1;
	public static readonly IDENTIFIER = 2;
	public static readonly INT = 3;
	public static readonly BOOL = 4;
	public static readonly COMMA = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly INC = 8;
	public static readonly DEC = 9;
	public static readonly MMAX = 10;
	public static readonly MMIN = 11;
	public static readonly EQ = 12;
	public static readonly LESS = 13;
	public static readonly GREATER = 14;
	public static readonly NOT = 15;
	public static readonly AND = 16;
	public static readonly OR = 17;
	public static readonly WS = 18;
	public static readonly RULE_compileUnit = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compileUnit", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "','", "'('", "')'", 
		"'++'", "'--'", "'mmax'", "'mmin'", "'=='", "'<'", "'>'", "'!'", "'&&'", 
		"'||'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "IDENTIFIER", "INT", "BOOL", "COMMA", "LPAREN", "RPAREN", 
		"INC", "DEC", "MMAX", "MMIN", "EQ", "LESS", "GREATER", "NOT", "AND", "OR", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalculatorParser._LITERAL_NAMES, CalculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalculatorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public compileUnit(): CompileUnitContext {
		let _localctx: CompileUnitContext = new CompileUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalculatorParser.RULE_compileUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 4;
			this.expression(0);
			this.state = 5;
			this.match(CalculatorParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CalculatorParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalculatorParser.WS:
				{
				_localctx = new WsExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 8;
				this.match(CalculatorParser.WS);
				this.state = 9;
				this.expression(15);
				}
				break;
			case CalculatorParser.LPAREN:
				{
				_localctx = new ParenthesizedExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 10;
				this.match(CalculatorParser.LPAREN);
				this.state = 11;
				this.expression(0);
				this.state = 12;
				this.match(CalculatorParser.RPAREN);
				}
				break;
			case CalculatorParser.MMAX:
				{
				_localctx = new MaxExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 14;
				(_localctx as MaxExprContext)._operatorToken = this.match(CalculatorParser.MMAX);
				this.state = 15;
				this.match(CalculatorParser.LPAREN);
				this.state = 16;
				this.expression(0);
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 17;
					this.match(CalculatorParser.COMMA);
					this.state = 19;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 18;
						this.match(CalculatorParser.WS);
						}
						break;
					}
					this.state = 21;
					this.expression(0);
					}
					}
					this.state = 24;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CalculatorParser.COMMA);
				this.state = 26;
				this.match(CalculatorParser.RPAREN);
				}
				break;
			case CalculatorParser.MMIN:
				{
				_localctx = new MinExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 28;
				(_localctx as MinExprContext)._operatorToken = this.match(CalculatorParser.MMIN);
				this.state = 29;
				this.match(CalculatorParser.LPAREN);
				this.state = 30;
				this.expression(0);
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 31;
					this.match(CalculatorParser.COMMA);
					this.state = 33;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 32;
						this.match(CalculatorParser.WS);
						}
						break;
					}
					this.state = 35;
					this.expression(0);
					}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CalculatorParser.COMMA);
				this.state = 40;
				this.match(CalculatorParser.RPAREN);
				}
				break;
			case CalculatorParser.NOT:
				{
				_localctx = new NotExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				(_localctx as NotExprContext)._operatorToken = this.match(CalculatorParser.NOT);
				this.state = 43;
				this.expression(11);
				}
				break;
			case CalculatorParser.BOOL:
				{
				_localctx = new BooleanExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 44;
				this.match(CalculatorParser.BOOL);
				}
				break;
			case CalculatorParser.NUMBER:
				{
				_localctx = new NumberExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 45;
				this.match(CalculatorParser.NUMBER);
				}
				break;
			case CalculatorParser.IDENTIFIER:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				this.match(CalculatorParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 68;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new AndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 49;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 50;
						(_localctx as AndExprContext)._operatorToken = this.match(CalculatorParser.AND);
						this.state = 51;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new OrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 52;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 53;
						(_localctx as OrExprContext)._operatorToken = this.match(CalculatorParser.OR);
						this.state = 54;
						this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new EqExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 55;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 56;
						(_localctx as EqExprContext)._operatorToken = this.match(CalculatorParser.EQ);
						this.state = 57;
						this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new LessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 58;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 59;
						(_localctx as LessExprContext)._operatorToken = this.match(CalculatorParser.LESS);
						this.state = 60;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new GreaterExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 61;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 62;
						(_localctx as GreaterExprContext)._operatorToken = this.match(CalculatorParser.GREATER);
						this.state = 63;
						this.expression(5);
						}
						break;

					case 6:
						{
						_localctx = new IncExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 64;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 65;
						(_localctx as IncExprContext)._operatorToken = this.match(CalculatorParser.INC);
						}
						break;

					case 7:
						{
						_localctx = new DecExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalculatorParser.RULE_expression);
						this.state = 66;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 67;
						(_localctx as DecExprContext)._operatorToken = this.match(CalculatorParser.DEC);
						}
						break;
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14L\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\x16\n\x03\x03\x03\x06\x03\x19\n\x03\r\x03\x0E\x03\x1A\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03$\n\x03\x03\x03\x06" +
		"\x03\'\n\x03\r\x03\x0E\x03(\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x032\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03J\v\x03" +
		"\x03\x03\x02\x02\x03\x04\x04\x02\x02\x04\x02\x02\x02\x02[\x02\x06\x03" +
		"\x02\x02\x02\x041\x03\x02\x02\x02\x06\x07\x05\x04\x03\x02\x07\b\x07\x02" +
		"\x02\x03\b\x03\x03\x02\x02\x02\t\n\b\x03\x01\x02\n\v\x07\x14\x02\x02\v" +
		"2\x05\x04\x03\x11\f\r\x07\b\x02\x02\r\x0E\x05\x04\x03\x02\x0E\x0F\x07" +
		"\t\x02\x02\x0F2\x03\x02\x02\x02\x10\x11\x07\f\x02\x02\x11\x12\x07\b\x02" +
		"\x02\x12\x18\x05\x04\x03\x02\x13\x15\x07\x07\x02\x02\x14\x16\x07\x14\x02" +
		"\x02\x15\x14\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x17\x03\x02\x02" +
		"\x02\x17\x19\x05\x04\x03\x02\x18\x13\x03\x02\x02\x02\x19\x1A\x03\x02\x02" +
		"\x02\x1A\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
		"\x02\x1C\x1D\x07\t\x02\x02\x1D2\x03\x02\x02\x02\x1E\x1F\x07\r\x02\x02" +
		"\x1F \x07\b\x02\x02 &\x05\x04\x03\x02!#\x07\x07\x02\x02\"$\x07\x14\x02" +
		"\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x05\x04" +
		"\x03\x02&!\x03\x02\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03" +
		"\x02\x02\x02)*\x03\x02\x02\x02*+\x07\t\x02\x02+2\x03\x02\x02\x02,-\x07" +
		"\x11\x02\x02-2\x05\x04\x03\r.2\x07\x06\x02\x02/2\x07\x03\x02\x0202\x07" +
		"\x04\x02\x021\t\x03\x02\x02\x021\f\x03\x02\x02\x021\x10\x03\x02\x02\x02" +
		"1\x1E\x03\x02\x02\x021,\x03\x02\x02\x021.\x03\x02\x02\x021/\x03\x02\x02" +
		"\x0210\x03\x02\x02\x022H\x03\x02\x02\x0234\f\n\x02\x0245\x07\x12\x02\x02" +
		"5G\x05\x04\x03\v67\f\t\x02\x0278\x07\x13\x02\x028G\x05\x04\x03\n9:\f\b" +
		"\x02\x02:;\x07\x0E\x02\x02;G\x05\x04\x03\t<=\f\x07\x02\x02=>\x07\x0F\x02" +
		"\x02>G\x05\x04\x03\b?@\f\x06\x02\x02@A\x07\x10\x02\x02AG\x05\x04\x03\x07" +
		"BC\f\f\x02\x02CG\x07\n\x02\x02DE\f\v\x02\x02EG\x07\v\x02\x02F3\x03\x02" +
		"\x02\x02F6\x03\x02\x02\x02F9\x03\x02\x02\x02F<\x03\x02\x02\x02F?\x03\x02" +
		"\x02\x02FB\x03\x02\x02\x02FD\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02HI\x03\x02\x02\x02I\x05\x03\x02\x02\x02JH\x03\x02\x02\x02\t\x15" +
		"\x1A#(1FH";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalculatorParser.__ATN) {
			CalculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalculatorParser._serializedATN));
		}

		return CalculatorParser.__ATN;
	}

}

export class CompileUnitContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(CalculatorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_compileUnit; }
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterCompileUnit) {
			listener.enterCompileUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitCompileUnit) {
			listener.exitCompileUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitCompileUnit) {
			return visitor.visitCompileUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalculatorParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class WsExprContext extends ExpressionContext {
	public WS(): TerminalNode { return this.getToken(CalculatorParser.WS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterWsExpr) {
			listener.enterWsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitWsExpr) {
			listener.exitWsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitWsExpr) {
			return visitor.visitWsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExprContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(CalculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CalculatorParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterParenthesizedExpr) {
			listener.enterParenthesizedExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitParenthesizedExpr) {
			listener.exitParenthesizedExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpr) {
			return visitor.visitParenthesizedExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MaxExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public LPAREN(): TerminalNode { return this.getToken(CalculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CalculatorParser.RPAREN, 0); }
	public MMAX(): TerminalNode { return this.getToken(CalculatorParser.MMAX, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.COMMA);
		} else {
			return this.getToken(CalculatorParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.WS);
		} else {
			return this.getToken(CalculatorParser.WS, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMaxExpr) {
			listener.enterMaxExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMaxExpr) {
			listener.exitMaxExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMaxExpr) {
			return visitor.visitMaxExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public LPAREN(): TerminalNode { return this.getToken(CalculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CalculatorParser.RPAREN, 0); }
	public MMIN(): TerminalNode { return this.getToken(CalculatorParser.MMIN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.COMMA);
		} else {
			return this.getToken(CalculatorParser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CalculatorParser.WS);
		} else {
			return this.getToken(CalculatorParser.WS, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterMinExpr) {
			listener.enterMinExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitMinExpr) {
			listener.exitMinExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitMinExpr) {
			return visitor.visitMinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NOT(): TerminalNode { return this.getToken(CalculatorParser.NOT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterNotExpr) {
			listener.enterNotExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitNotExpr) {
			listener.exitNotExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode { return this.getToken(CalculatorParser.INC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterIncExpr) {
			listener.enterIncExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitIncExpr) {
			listener.exitIncExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitIncExpr) {
			return visitor.visitIncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DEC(): TerminalNode { return this.getToken(CalculatorParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterDecExpr) {
			listener.enterDecExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitDecExpr) {
			listener.exitDecExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitDecExpr) {
			return visitor.visitDecExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(CalculatorParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(CalculatorParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(CalculatorParser.EQ, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterEqExpr) {
			listener.enterEqExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitEqExpr) {
			listener.exitEqExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitEqExpr) {
			return visitor.visitEqExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS(): TerminalNode { return this.getToken(CalculatorParser.LESS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterLessExpr) {
			listener.enterLessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitLessExpr) {
			listener.exitLessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitLessExpr) {
			return visitor.visitLessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterExprContext extends ExpressionContext {
	public _operatorToken!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER(): TerminalNode { return this.getToken(CalculatorParser.GREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterGreaterExpr) {
			listener.enterGreaterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitGreaterExpr) {
			listener.exitGreaterExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitGreaterExpr) {
			return visitor.visitGreaterExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExprContext extends ExpressionContext {
	public BOOL(): TerminalNode { return this.getToken(CalculatorParser.BOOL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterBooleanExpr) {
			listener.enterBooleanExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitBooleanExpr) {
			listener.exitBooleanExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitBooleanExpr) {
			return visitor.visitBooleanExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExprContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(CalculatorParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterNumberExpr) {
			listener.enterNumberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitNumberExpr) {
			listener.exitNumberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitNumberExpr) {
			return visitor.visitNumberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CalculatorParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalculatorListener): void {
		if (listener.enterIdentifierExpr) {
			listener.enterIdentifierExpr(this);
		}
	}
	// @Override
	public exitRule(listener: CalculatorListener): void {
		if (listener.exitIdentifierExpr) {
			listener.exitIdentifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalculatorVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


