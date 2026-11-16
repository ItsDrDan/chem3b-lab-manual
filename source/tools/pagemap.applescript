tell application "Microsoft Word"
	set d to document "proof2.docx"
	set docEnd to end of content of text object of d
	set starts to {0}
	set r to create range d start 0 end 0
	repeat 300 times
		set r2 to go to next r what goto a page item
		set s to start of content of r2
		if s ≤ (item -1 of starts) then exit repeat
		set end of starts to s
		set r to r2
	end repeat
	set end of starts to docEnd
	set out to ""
	repeat with p from 1 to ((count of starts) - 1)
		set s to item p of starts
		set e to (item (p + 1) of starts)
		set t to content of (create range d start s end e)
		set lastr to create range d start (e - 1) end (e - 1)
		set y to get range information lastr information type vertical position relative to page
		set L to length of t
		set h to t
		if L > 50 then set h to text 1 thru 50 of t
		if L > 40 then
			set tl to text (L - 39) thru L of t
		else
			set tl to t
		end if
		set out to out & p & tab & L & tab & y & tab & h & tab & tl & linefeed
	end repeat
	return out
end tell
