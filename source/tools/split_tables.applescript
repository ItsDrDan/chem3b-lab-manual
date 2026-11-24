-- List tables that split across pages in an open Word document.
-- usage: osascript split_tables.applescript oerN.docx   (prints: table#, first page, last page, rows, first cell)
on run argv
set dn to item 1 of argv
tell application "Microsoft Word"
  set d to document dn
  set n to count of tables of d
  set out to "tables " & n & linefeed
  repeat with i from 1 to n
    set t to table i of d
    set r to text object of t
    set e to (get range information r information type active end page number) as integer
    set s0 to start of content of r
    set r2 to create range d start s0 end (s0 + 1)
    set s to (get range information r2 information type active end page number) as integer
    if s is not e then
      set c to content of (text object of (get cell from table t row 1 column 1))
      set out to out & i & tab & s & tab & e & tab & (count of rows of t) & tab & c & linefeed
    end if
  end repeat
  return out
end tell
end run
