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
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true,
                greedy: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        boolean: /\.(?:TRUE|FALSE)\.(?:_\w+)?/i,
        number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,
        keyword: [
            {
                pattern: /((?::|OF) )(?:[A-Z<>]+)/i,
                lookbehind: true,
            },
            /\b(?:END ?)?(?:DO|WHILE|FUNCTION|IF|INTERFACE|MODULE|PROCEDURE|TYPE|IF)\b/i,
            /\b(?:DECLARE|DEFINE|CALL|CASE|CLOSE|CONTINUE|DO|END|EXIT|GO ?TO|POINTER|PRIVATE|PUBLIC|READ|WRITE|RETURN|ELSE|ELSEIF|NULL|THEN)\b/i, // Others
        ],
        operator: /[+\-*=%]|<-|:/i
    };
}
