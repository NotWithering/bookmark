# Online Game Bookmarklet Hacks

This repository contains bookmarklets that can be used to hack online games. The bookmarklets allow you to skip waiting times for loading games and instantly fullscreen games online.

## How to Use

To use these bookmarklets, you need to add them to your browser's bookmark bar. Here's how:

1. Copy the code for the bookmarklet you want to use from the list below.
2. Right-click on your browser's bookmark bar and select "Add Page".
3. In the "Name" field, type a name for the bookmarklet (e.g. "Skip Waiting Time").
4. In the "URL" field, paste the code for the bookmarklet.
5. Click "Save".

### Bookmarklets

#### Skip Waiting Time for Loading Game on Coolmathgames.com

```javascript:cmg_remove_padg();```

#### Instant Fullscreen (May Need to Press Multiple Times)

```javascript:(function(){if (typeof cmg_remove_padg === 'function') {cmg_remove_padg();setTimeout(removeElements, 1000);} else {removeElements();}function removeElements() {var elems = document.body.getElementsByTagName('*');var iframes = [];var canvases = [];for (var i = 0; i < elems.length; i++) {var elem = elems[i];if (elem.tagName === 'IFRAME') {iframes.push(elem);} else if (elem.tagName === 'CANVAS') {canvases.push(elem);} else {if (elem.tagName !== 'BODY' && elem.tagName !== 'HTML' && !elem.contains(document.querySelector('iframe')) && !elem.contains(document.querySelector('canvas'))) {elem.parentNode.removeChild(elem);}}}}for (var j = 0; j < iframes.length; j++) {var iframe = iframes[j];iframe.style.position = 'fixed';iframe.style.top = '0';iframe.style.left = '0';iframe.style.width = '100%';iframe.style.height = '100%';}for (var k = 0; k < canvases.length; k++) {var canvas = canvases[k];canvas.style.position = 'fixed';canvas.style.top = '0';canvas.style.left = '0';canvas.style.width = '100%';canvas.style.height = '100%';}document.body.style.overflow = 'hidden';})();```
