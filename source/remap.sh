#!/bin/bash
# Rebuild the manual, open it in Microsoft Word (macOS) as proofN.docx, and map every page.
# Prints the page count and any page whose last line sits high on the page (y < 250),
# which usually means a heading or answer box spilled onto its own page.
# usage: ./remap.sh N     (N = proof number; the previous proof, N-1, is closed first)
set -e
cd "$(dirname "$0")"
NODE=${NODE:-$(command -v node || echo ~/.local/node/bin/node)}; WORK=out/pagemap; mkdir -p "$WORK"
N=$1; P=$((N-1))
PROOF=1 "$NODE" master.js fig out/CHEM3B_Lab_Manual.docx | grep -v /dev/null
timeout 30 osascript -e "tell application \"Microsoft Word\" to close document \"proof$P.docx\" saving no" || true
cp out/CHEM3B_Lab_Manual.docx out/proof$N.docx; open -a "Microsoft Word" out/proof$N.docx
for i in $(seq 1 30); do timeout 10 osascript -e 'tell application "Microsoft Word" to get name of documents' 2>/dev/null | grep -q "proof$N" && break; sleep 3; done
sed -e "s/\"proof2.docx\"/\"proof$N.docx\"/" tools/pagemap.applescript > "$WORK/pm.applescript"
timeout 120 osascript -e "tell application \"Microsoft Word\" to compute statistics document \"proof$N.docx\" statistic statistic pages" >/dev/null
timeout 300 osascript "$WORK/pm.applescript" > "$WORK/pm$N.tsv"
python3 tools/parsepm.py "$WORK/pm$N.tsv" > "$WORK/pm$N.txt"; echo "pages: $(wc -l < "$WORK/pm$N.txt")"; awk '$3<250' "$WORK/pm$N.txt"
