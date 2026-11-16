#!/bin/bash
# Render every RDKit SVG in fig/figapp_mol to PNG (3x) via an HTML wrapper.
cd "$(dirname "$0")"; D="$PWD/figapp_mol"; T="${TMPDIR:-/tmp}/figapp_wrap"; mkdir -p "$T"
for f in "$D"/*.svg; do n=$(basename "$f" .svg)
  if [ $# -gt 0 ] && ! printf "%s\n" "$@" | grep -qx "$n"; then continue; fi
  read W H < <(grep -o "width='[0-9.]*px' height='[0-9.]*px'" "$f" | head -1 | grep -o '[0-9.]*' | awk '{printf "%d ", $1+0.999}')
  echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"$W\" height=\"$H\" style=\"background:#fff\"><image href=\"$f\" x=\"0\" y=\"0\" width=\"$W\" height=\"$H\"/></svg><style>body{margin:0}</style>" > "$T/$n.html"
  ../svg2png.sh "$T/$n.html" "$D/$n.png"
done
