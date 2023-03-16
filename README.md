# Online Game Bookmarklet Hacks

This repository contains bookmarklets that can be used to enhance your online gaming experience. The bookmarklets can be easily added to your browser's bookmarks bar, and can be used on various online gaming websites.

## Bookmarklets

### Skip Waiting Time for Loading Games on Coolmathgames.com

This bookmarklet can be used to skip the waiting time for loading games on Coolmathgames.com.

To use this bookmarklet, simply drag the following link to your browser's bookmarks bar:

[Skip Waiting Time](javascript:cmg_remove_padg();)

### Instant Fullscreen for Games Online

This bookmarklet can be used to instantly enter fullscreen mode for games online. Please note that you may need to press the bookmarklet multiple times to enter fullscreen mode.

To use this bookmarklet, simply drag the following link to your browser's bookmarks bar:

[Instant Fullscreen](javascript:(function(){
  if (typeof cmg_remove_padg === 'function') {
    cmg_remove_padg();
    setTimeout(removeElements, 1000);
  } else {
    removeElements();
  }
  function removeElements() {
    var elems = document.body.getElementsByTagName('*');
    var iframes = [];
    var canvases = [];
    for (var i = 0; i < elems.length; i++) {
      var elem = elems[i];
      if (elem.tagName === 'IFRAME') {
        iframes.push(elem);
      } else if (elem.tagName === 'CANVAS') {
        canvases.push(elem);
      } else {
        if (elem.tagName !== 'BODY' && elem.tagName !== 'HTML' && !elem.contains(document.querySelector('iframe')) && !elem.contains(document.querySelector('canvas'))) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
    for (var j = 0; j < iframes.length; j++) {
      var iframe = iframes[j];
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
    }
    for (var k = 0; k < canvases.length; k++) {
      var canvas = canvases[k];
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    }
    document.body.style.overflow = 'hidden';
  }
})();)
