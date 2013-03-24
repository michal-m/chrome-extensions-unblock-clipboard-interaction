function unblockClipboardInteraction() {
    var snapshot = document.evaluate('//@onpaste',
        document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null),
        numItems = snapshot.snapshotLength - 1;

    for (var i = numItems; i >= 0; i--)
        snapshot.snapshotItem(i).nodeValue = 'return true';
}

window.addEventListener('DOMContentLoaded', unblockClipboardInteraction, false);
