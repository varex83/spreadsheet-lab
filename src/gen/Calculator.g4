grammar Calculator;

/*
* Parser Rules
*/
compileUnit : expression EOF;

expression : WS expression #WsExpr
        | LPAREN expression RPAREN #ParenthesizedExpr 
        | operatorToken=MMAX LPAREN expression (COMMA WS? expression)+ RPAREN #MaxExpr
        | operatorToken=MMIN LPAREN expression (COMMA WS? expression)+ RPAREN #MinExpr
        | operatorToken=NOT expression #NotExpr
        | expression operatorToken=INC #IncExpr
        | operatorToken=INC2 LPAREN expression RPAREN #IncExpr
        | expression operatorToken=DEC #DecExpr
        | operatorToken=DEC2 LPAREN expression RPAREN #DecExpr
        | expression operatorToken=AND expression #AndExpr
        | expression operatorToken=OR expression #OrExpr
        | expression operatorToken=EQ expression #EqExpr
        | expression operatorToken=LESS expression #LessExpr
        | expression operatorToken=GREATER expression #GreaterExpr
        | operatorToken=INC ( expression ) #Inc2Expr
        | BOOL #BooleanExpr
        | NUMBER #NumberExpr
        | IDENTIFIER #IdentifierExpr;

/*
* Lexer Rules
*/
NUMBER : INT ('.' INT)?;
IDENTIFIER : [a-zA-Z]+[0-9]+;
INT : ('0'..'9')+;
BOOL : 'false' | 'true';
COMMA : ',';
LPAREN : '(';
RPAREN : ')';
INC : '++';
INC2 : 'inc';
DEC : '--';
DEC2 : 'dec';
MMAX : 'mmax';
MMIN : 'mmin';
EQ : '==';
LESS : '<';
GREATER : '>';
NOT : '!';
AND : '&&' | 'and';
OR : '||' | 'or';
WS : [ \t\r\n]+ -> channel(HIDDEN);
