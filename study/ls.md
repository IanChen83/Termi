ls
==========================


```shell
ls [OPTION]... [FILE]...
```


## Descriptions
ls list directory contents

## Display Options
* -a, --all
  do not ignore entries starting with .

* -A, --almost-all
  do not list implied . and ..

* --author
  with -l, print the author of each file

* --block-size=SIZE
  scale sizes by SIZE before printing them
  e.g., '--block-size=M' prints sizes in units of 1,048,576 bytes; see SIZE format below

* -B, --ignore-backups
  do not list implied entries ending with ~

* --format=WORD
  across -x, commas -m, horizontal -x, long -l, single-column -1, verbose -l, vertical -C

* -g
  like -l, but do not list owner

* --group-directories-first
  group directories before files

  can be augmented with a --sort option, but any use of --sort=none (-U) disables grouping

* -h, --human-readable
  with -l and/or -s, print human readable sizes (e.g., 1K 234M 2G)
  with --si   likewise, but use powers of 1000 not 1024

* --hide=PATTERN
  do not list implied entries matching shell PATTERN (overridden by -a or -A)

* --indicator-style=WORD
  append indicator with style WORD to entry names: none (default), slash (-p), file-type (--file-type), classify (-F)

* -i, --inode
  print the index number of each file

* -n, --numeric-uid-gid
  like -l, but list numeric user and group IDs

* -o
  like -l, but do not list group information

* --quoting-style=WORD
  use quoting style WORD for entry names: literal, locale, shell, shell-always, shell-escape, shell-escape-always, c, escape

* -r, --reverse
  reverse order while sorting

* -s, --size
  print the allocated size of each file, in blocks

* --sort=WORD
  sort by WORD instead of name: none (-U), size (-S), time (-t), version (-v), extension (-X)

* --time=WORD
  with -l, show time as WORD instead of default modification time: atime or access or use (-u); ctime or status (-c); also use specified time as sort key if --sort=time (newest first)

* --time-style=STYLE
  with  -l,  show  times  using  style  STYLE:  full-iso,  long-iso, iso, locale, or +FORMAT; FORMAT is interpreted like in 'date'; if FORMAT is FORMAT1<newline>FORMAT2, then FORMAT1 applies to
  non-recent files and FORMAT2 to recent files; if STYLE is prefixed with 'posix-', STYLE takes effect only outside the POSIX locale

### Aditional Help Messages for Options
* The SIZE argument is an integer and optional unit (example: 10K is 10*1024).  Units are K,M,G,T,P,E,Z,Y (powers of 1024) or KB,MB,... (powers of 1000).

* Using color to distinguish file types is disabled both by default and with --color=never.  With --color=auto, ls emits color codes only when standard output is connected to a terminal.  The  LS_COL‐
