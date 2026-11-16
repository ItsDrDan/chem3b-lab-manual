#!/bin/bash
# Render the given figapp_*.html files (names without extension) to PNG
cd "$(dirname "$0")"
for f in "$@"; do ../svg2png.sh "$PWD/$f.html" "$PWD/$f.png"; done
