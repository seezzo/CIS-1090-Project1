export default function setupEditor(userText, respell) {

    let observer = new MutationObserver(function (ms) {
        onTextChange(userText.innerText);
    });

    observer.observe(userText, { subtree: true, characterData: true });

    function onTextChange(text) {
        let sel = window.getSelection();
        let currentDiv = sel.focusNode;
        while (currentDiv.tagName != "DIV")
            currentDiv = currentDiv.parentElement;

        let currentOffset = getCaretPosition(currentDiv);

        currentDiv.innerHTML = respell(currentDiv.innerText);

        setCaretPosition(currentDiv, currentOffset);
    }

    function getCaretPosition(div) {
        let sel = window.getSelection();
        let off = sel.focusOffset;
        let n = sel.focusNode;
        while (n != div) {
            for (let ps = n.previousSibling; ps != null; ps = ps.previousSibling) {
                if (ps.length)
                    off += ps.length
                else if (ps.innerText)
                    off += ps.innerText.length;
            }
            n = n.parentNode;
        }
        return off;
    }

    function setCaretPosition(el, pos) {
        // Loop through all child nodes
        for (var node of el.childNodes) {
            if (node.nodeType == 3) { // we have a text node
                if (node.length >= pos) {
                    // finally add our range
                    var range = document.createRange(),
                        sel = window.getSelection();
                    range.setStart(node, pos);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    return -1; // we are done
                } else {
                    pos -= node.length;
                }
            } else {
                pos = setCaretPosition(node, pos);
                if (pos == -1) {
                    return -1; // no need to finish the for loop
                }
            }
        }
        return pos; // needed because of recursion stuff
    }
}