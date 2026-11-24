#!/bin/bash
# Build the full manual and export it to PDF with Microsoft Word (macOS).
# usage (from anywhere): source/tools/export_pdf.sh N   -> ~/Downloads/chem3b_export/oerN.docx and oerN.pdf
# Word can only save into folders it has been granted, so everything goes through ~/Downloads/chem3b_export.
D=~/Downloads/chem3b_export; N=$1; mkdir -p "$D"
cd "$(dirname "$0")/.."
NOPROMPT=1 TOCJSON=tocpages.json ~/.local/node/bin/node master.js fig out/CHEM3B_Lab_Manual.docx | tail -1
cp out/CHEM3B_Lab_Manual.docx "$D/oer$N.docx"; open -a "Microsoft Word" "$D/oer$N.docx"
for i in $(seq 1 30); do timeout 10 osascript -e 'tell application "Microsoft Word" to get name of documents' 2>/dev/null | grep -q "oer$N" && break; sleep 3; done
sleep 30
timeout 120 osascript -e "tell application \"Microsoft Word\" to compute statistics document \"oer$N.docx\" statistic statistic pages"
sleep 10; rm -f "$D/oer$N.pdf"
timeout 300 osascript -e "tell application \"Microsoft Word\" to save as document \"oer$N.docx\" file name (POSIX path of \"$D/oer$N.pdf\") file format format PDF"
ls -l "$D/oer$N.pdf"
