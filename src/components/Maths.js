import KaTeX from 'katex';
import * as React from 'react';
import Blockquote from './Blockquote';

export default function Maths({ children, onEvaluate, ...props }) {
    try {
        const html = KaTeX.renderToString(children, {
            throwOnError: true
        });

        if (onEvaluate) onEvaluate(false);

        return (
            <Blockquote dangerouslySetInnerHTML={{ __html: html }} {...props} />
        );
    } catch (e) {
        if (onEvaluate) onEvaluate(true);

        return (
            <Blockquote color="error" {...props} >
                {e.toString()}
            </Blockquote>
        );
    }
}