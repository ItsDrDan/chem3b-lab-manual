#!/bin/bash
# usage: svg2png.sh in.svg out.png  (reads width/height from svg)
in="$1"; out="$2"
W=$(grep -o 'width="[0-9]*"' "$in" | head -1 | grep -o '[0-9]*'); H=$(grep -o 'height="[0-9]*"' "$in" | head -1 | grep -o '[0-9]*')
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=3 --default-background-color=FFFFFFFF --window-size=$W,$H --screenshot="$out" "file://$in" >/dev/null 2>&1
