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
        | expression operatorToken=DEC #DecExpr
        | expression operatorToken=AND expression #AndExpr 
        | expression operatorToken=OR expression #OrExpr
        | expression operatorToken=EQ expression #EqExpr
        | expression operatorToken=LESS expression #LessExpr
        | expression operatorToken=GREATER expression #GreaterExpr
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
DEC : '--';
MMAX : 'mmax';
MMIN : 'mmin';
EQ : '==';
LESS : '<';
GREATER : '>';
NOT : '!';
AND : '&&';
OR : '||';
WS : [ \t\r\n]+ -> channel(HIDDEN);
