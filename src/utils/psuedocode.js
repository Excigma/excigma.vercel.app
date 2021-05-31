'use strict';

module.exports = psuedocode;

psuedocode.displayName = 'psuedocode';
psuedocode.aliases = [];

function psuedocode(Prism) {
    Prism.languages.psuedocode = {
        string: {
            pattern: /(?:\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,
            inside: {
                comment: {
                    pattern: /(&(?:\r\n?|\n)\s*)!.*/,
                    lookbehind: true
                }
            }
        },
        comment: [
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        keyword: [
            {
                pattern: /((?::|OF) )(?:[A-Z<>]+)/i,
                lookbehind: true,
            },
            /\b(?:END ?)?(?:DO|WHILE|FUNCTION|CASE|TRY|FOR|LOOP|IF|PROCEDURE|TYPE|IF)\b/i,
            /\b(?:DECLARE|DEFINE|CALL|CLOSE|CONTINUE|END|EXIT|GO ?TO|PRIVATE|PUBLIC|READ|WRITE|RETURN|ELSE|ELSEIF|NULL|THEN)\b/i,
        ],
        function: /\w+(?=\()/,
        operator: /[+//\-*=%<>()[\]:]|<-|/i
    };
}
