import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { CalculatorListener } from "./CalculatorListener";
import { CalculatorVisitor } from "./CalculatorVisitor";
export declare class CalculatorParser extends Parser {
    static readonly NUMBER = 1;
    static readonly IDENTIFIER = 2;
    static readonly INT = 3;
    static readonly BOOL = 4;
    static readonly COMMA = 5;
    static readonly LPAREN = 6;
    static readonly RPAREN = 7;
    static readonly INC = 8;
    static readonly INC2 = 9;
    static readonly DEC = 10;
    static readonly DEC2 = 11;
    static readonly MMAX = 12;
    static readonly MMIN = 13;
    static readonly EQ = 14;
    static readonly LESS = 15;
    static readonly GREATER = 16;
    static readonly NOT = 17;
    static readonly AND = 18;
    static readonly OR = 19;
    static readonly WS = 20;
    static readonly RULE_compileUnit = 0;
    static readonly RULE_expression = 1;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    compileUnit(): CompileUnitContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class CompileUnitContext extends ParserRuleContext {
    expression(): ExpressionContext;
    EOF(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class WsExprContext extends ExpressionContext {
    WS(): TerminalNode;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class ParenthesizedExprContext extends ExpressionContext {
    LPAREN(): TerminalNode;
    expression(): ExpressionContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MaxExprContext extends ExpressionContext {
    _operatorToken: Token;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RPAREN(): TerminalNode;
    MMAX(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WS(): TerminalNode[];
    WS(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class MinExprContext extends ExpressionContext {
    _operatorToken: Token;
    LPAREN(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RPAREN(): TerminalNode;
    MMIN(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WS(): TerminalNode[];
    WS(i: number): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class NotExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext;
    NOT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class IncExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext;
    INC(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    INC2(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class DecExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext;
    DEC(): TerminalNode | undefined;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    DEC2(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class AndExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    AND(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class OrExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    OR(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class EqExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQ(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class LessExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LESS(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class GreaterExprContext extends ExpressionContext {
    _operatorToken: Token;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class Inc2ExprContext extends ExpressionContext {
    _operatorToken: Token;
    INC(): TerminalNode;
    expression(): ExpressionContext | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class BooleanExprContext extends ExpressionContext {
    BOOL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class NumberExprContext extends ExpressionContext {
    NUMBER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
export declare class IdentifierExprContext extends ExpressionContext {
    IDENTIFIER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CalculatorListener): void;
    exitRule(listener: CalculatorListener): void;
    accept<Result>(visitor: CalculatorVisitor<Result>): Result;
}
//# sourceMappingURL=CalculatorParser.d.ts.map