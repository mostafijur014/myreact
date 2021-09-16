export default function text({ addEmoji, addBracket }) {
    // eslint-disable-next-line no-shadow
    let text = 'I am JavaScript Programming Language.';
    if (addEmoji) {
        text = addEmoji(text, '💜');
    }
    if (addBracket) {
        text = addBracket(text);
    }
    return <div>{text}</div>;
}
