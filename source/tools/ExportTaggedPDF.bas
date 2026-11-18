' NOTE (2026-11-17): on Mac Word this call fails with run-time error 5 (DocStructureTags/CreateBookmarks
' are not supported), so tagged PDFs must come from Word's interactive Save As > PDF > "Best for electronic
' distribution and accessibility". Kept for Windows Word, where ExportAsFixedFormat supports these options.
' CHEM 3B Lab Manual: export the active Word document as an accessible (tagged) PDF
' with bookmarks from the headings, next to the .docx (same name, .pdf).
' Install once: Word > Tools > Macro > Visual Basic Editor; select "Normal" in the
' Project pane; Insert > Module; paste this file's text; File > Save Normal; close the editor.
' The build script runs it with AppleScript:  run VB macro macro name "ExportTaggedPDF"
Sub ExportTaggedPDF()
    Dim outPath As String
    outPath = Left(ActiveDocument.FullName, InStrRev(ActiveDocument.FullName, ".")) & "pdf"
    ActiveDocument.ExportAsFixedFormat OutputFileName:=outPath, _
        ExportFormat:=wdExportFormatPDF, OpenAfterExport:=False, _
        OptimizeFor:=wdExportOptimizeForPrint, Range:=wdExportAllDocument, _
        Item:=wdExportDocumentContent, IncludeDocProps:=True, KeepIRM:=True, _
        CreateBookmarks:=wdExportCreateHeadingBookmarks, DocStructureTags:=True, _
        BitmapMissingFonts:=True, UseISO19005_1:=False
End Sub
