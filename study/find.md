
find
==========================

```shell
find [starting-point...] -printf [format]
```

## Description
`find` searches the directory tree rooted at each given starting-point by evaluating the given expression from left to right, according to the rules of precedence until the outcome is known (the left hand side is false for and operations, true for or), at which point find moves on to the next file name. If no starting-point is specified, `.` is assumed.

## `-printf` Format Options
Field widths and precisions can be specified as with the `printf` C function. Please note that many of the fields are printed as %s rather than %d, and this may mean that flags don't work as you might expect. This also means that the `-` flag does work (it forces fields to be left-aligned). Unlike -print, -printf does not add a newline at the end of the string. The escapes and directives are:

* \a
  Alarm bell.

* \b
  Backspace.

* \c
  Stop printing from this format immediately and flush the output.

* \f
  Form feed.

* \n
  Newline.

* \r
  Carriage return.

* \t
  Horizontal tab.

* \v
  Vertical tab.

* \0
  ASCII NUL.

* \\\\
  A literal backslash (`\`).

* \NNN
  The character whose ASCII code is NNN (octal).

* A `\` character followed by any other character is treated as an ordinary character, so they both are printed.

* %%
  A literal percent sign.

* %a
  File's last access time in the format returned by the C `ctime` function.

* %Ak
  File's last access time in the format specified by k, which is either `@` or a directive for the C `   strftime` function. The possible values for k are listed below; some of them might not be available on all systems, due to differences in `strftime` between systems.

  @
       seconds since Jan. 1, 1970, 00:00 GMT, with fractional part.

  Time fields:

  * H
       hour (00..23)

  * I
       hour (01..12)

  * k
       hour ( 0..23)

  * l
       hour ( 1..12)

  * M
       minute (00..59)

  * p
       locale's AM or PM

  * r
       time, 12-hour (hh:mm:ss [AP]M)

  * S
       Second (00.00 .. 61.00). There is a fractional part.

  * T
       time, 24-hour (hh:mm:ss)

  * \+
       Date and time, separated by `+`, for example '2004-04-28+22:22:05.0'. This is a GNU extension. The time is given in the current timezone (which may be affected by setting the TZ environment variable). The seconds field includes a fractional part.

  * X
       locale's time representation (H:M:S)

  * Z
       time zone (e.g., EDT), or nothing if no time zone is determinable

  Date fields:

  * a
       locale's abbreviated weekday name (Sun..Sat)

  * A
       locale's full weekday name, variable length (Sunday..Saturday)

  * b
       locale's abbreviated month name (Jan..Dec)

  * B
       locale's full month name, variable length (January..December)

  * c
       locale's date and time (Sat Nov 04 12:02:33 EST 1989). The format is the same as for ctime(3) and so to preserve compatibility with that format, there is no fractional part in the seconds field.

  * d
       day of month (01..31)

  * D
       date (mm/dd/yy)

  * h
       same as b

  * j
       day of year (001..366)

  * m
       month (01..12)

  * U
       week number of year with Sunday as first day of week (00..53)

  * w
       day of week (0..6)

  * W
       week number of year with Monday as first day of week (00..53)

  * x
       locale's date representation (mm/dd/yy)

  * y
       last two digits of year (00..99)

  * Y
       year (1970...)

* %b
  The amount of disk space used for this file in 512-byte blocks. Since disk space is allocated in multiples of the filesystem block size this is usually greater than %s/512, but it can also be smaller if the file is a sparse file.

* %c
  File's last status change time in the format returned by the C `ctime` function.

* %Ck
  File's last status change time in the format specified by k, which is the same as for %A.

* %d
  File's depth in the directory tree; 0 means the file is a starting-point.

* %D
  The device number on which the file exists (the st_dev field of struct stat), in decimal.

* %f
  File's name with any leading directories removed (only the last element).

* %F
  Type of the filesystem the file is on; this value can be used for `-fstype`.

* %g
  File's group name, or numeric group ID if the group has no name.

* %G
  File's numeric group ID.

* %h
  Leading directories of file's name (all but the last element). If the file name contains no slashes (since it is in the current directory) the %h specifier expands to ".".

* %H
  Starting-point under which file was found.

* %i
  File's inode number (in decimal).

* %k
  The amount of disk space used for this file in 1K blocks. Since disk space is allocated in multiples of the filesystem block size this is usually greater than %s/1024, but it can also be smaller if the file is a sparse file.

* %l
  Object of symbolic link (empty string if file is not a symbolic link).

* %m
  File's permission bits (in octal). This option uses the `traditional` numbers which most Unix implementations use, but if your particular implementation uses an unusual ordering of octal permissions bits, you will see a difference between the actual value of the file's mode and the output of %m. Normally you will want to have a leading zero on this number, and to do this, you should use the # flag (as in, for example, `%#m').

* %M
  File's permissions (in symbolic form, as for ls). This directive is supported in findutils 4.2.5 and later.

* %n
  Number of hard links to file.

* %p
  File's name.

* %P
  File's name with the name of the starting-point under which it was found removed.

* %s
  File's size in bytes.

* %S
  File's sparseness. This is calculated as (BLOCKSIZE*st_blocks / st_size). The exact value you will get for an ordinary file of a certain length is system-dependent. However,  normally sparse files will have values less than 1.0, and files which use indirect blocks may have a value which is greater than 1.0. The value used for BLOCKSIZE is system-dependent, but is usually 512 bytes. If the file size is zero, the value printed is undefined. On systems which lack support for st_blocks, a file's sparseness is assumed to be 1.0.

* %t
  File's last modification time in the format returned by the C `ctime` function.

* %Tk
  File's last modification time in the format specified by k, which is the same as for %A.

* %u
  File's user name, or numeric user ID if the user has no name.

* %U
  File's numeric user ID.

* %y
  File's type (like in ls -l), U=unknown type (shouldn't happen)

* %Y
  File's type (like %y), plus follow symlinks: L=loop, N=nonexistent

* %Z
  (SELinux only) file's security context.

* %{ %[ %(
  Reserved for future use.

A `%` character followed by any other character is discarded, but the other character is printed (don't rely on this, as further format characters may be introduced). A `%' at the end of the format argument causes undefined behaviour since there is no following character. In some locales, it may hide your door keys, while in others it may remove the final page from the novel you are reading.

The %m and %d directives support the # , 0 and + flags, but the other directives do not, even if they print numbers. Numeric directives that do not support these flags include G, U, b, D,  k and n. The `-` format flag is supported and changes the alignment of a field from right-justified (which is the default) to left-justified.

## Examples
       find /tmp -name core -type f -print | xargs /bin/rm -f

Find files named core in or below the directory /tmp and delete them. Note that this will work incorrectly if there are any filenames containing newlines, single or double quotes, or spaces.

       find /tmp -name core -type f -print0 | xargs -0 /bin/rm -f

Find files named core in or below the directory /tmp and delete them, processing filenames in such a way that file or directory names containing single or double quotes, spaces or newlines are correctly handled. The -name test comes before the -type test in order to avoid having to call stat(2) on every file.

       find . -type f -exec file '{}' \;

Runs  `file`  on every file in or below the current directory. Notice that the braces are enclosed in single quote marks to protect them from interpretation as shell script punctuation. The semicolon is similarly protected by the use of a backslash, though single quotes could have been used in that case also.

       find / \( -perm -4000 -fprintf /root/suid.txt '%#m %u %p\n' \) , \
       \( -size +100M -fprintf /root/big.txt '%-10s %p\n' \)

Traverse the filesystem just once, listing setuid files and directories into /root/suid.txt and large files into /root/big.txt.

       find $HOME -mtime 0

Search for files in your home directory which have been modified in the last twenty-four hours. This command works this way because the time since each file was last modified is divided by 24 hours and any remainder is discarded. That means that to match -mtime 0, a file will have to have a modification in the past which is less than 24 hours ago.

       find /sbin /usr/sbin -executable \! -readable -print

Search for files which are executable but not readable.

       find . -perm 664

Search for files which have read and write permission for their owner, and group, but which other users can read but not write to. Files which meet these criteria but have other permissions bits set (for example if someone can execute the file) will not be matched.

       find . -perm -664

Search for files which have read and write permission for their owner and group, and which other users can read, without regard to the presence of any extra permission bits (for example the executable bit). This will match a file which has mode 0777, for example.

       find . -perm /222

Search for files which are writable by somebody (their owner, or their group, or anybody else).

       find . -perm /220
       find . -perm /u+w,g+w
       find . -perm /u=w,g=w

All three of these commands do the same thing, but the first one uses the octal representation of the file mode, and the other two use the symbolic form. These commands all search for files which are writable by either their owner or their group. The files don't have to be writable by both the owner and group to be matched; either will do.

       find . -perm -220
       find . -perm -g+w,u+w

Both these commands do the same thing; search for files which are writable by both their owner and their group.

       find . -perm -444 -perm /222 ! -perm /111
       find . -perm -a+r -perm /a+w ! -perm /a+x

These two commands both search for files that are readable for everybody ( `-perm -444` or `-perm -a+r`), have at least one write bit set ( `-perm /222` or `-perm /a+w`) but are not executable for anybody (`! -perm /111` and `! -perm /a+x` respectively).

       cd /source-dir
       find . -name .snapshot -prune -o \( \! -name *~ -print0 \)|
       cpio -pmd0 /dest-dir

This command copies the contents of `/source-dir` to `/dest-dir`, but omits files and directories named .snapshot (and anything in them). It also omits files or directories whose name ends in `~`, but not their contents. The construct `-prune -o \( ... -print0 \)` is quite common. The idea here is that the expression before `-prune` matches things which are to be pruned. However, the `-prune` action itself returns true,  so the following `-o` ensures that the right hand side is evaluated only for those directories which didn't get pruned (the contents of the pruned directories are not even visited, so their contents are irrelevant). The expression on the right hand side of the `-o` is in parentheses only for clarity. It emphasises that the `-print0` action takes place only for things that didn't have `-prune` applied to them. Because the default `and` condition between tests binds more tightly than `-o`, this is the default anyway, but the parentheses help to show what is going on.

       find repo/ -exec test -d {}/.svn \; -or \
       -exec test -d {}/.git \; -or -exec test -d {}/CVS \; \
       -print -prune

Given the following directory of projects and their associated SCM administrative directories, perform an efficient search for the projects' roots:

       repo/project1/CVS
       repo/gnu/project2/.svn
       repo/gnu/project3/.svn
       repo/gnu/project3/src/.svn
       repo/project4/.git

In this example, `-prune` prevents unnecessary descent into directories that have already been discovered (for example we do not search `project3/src` because we already found `project3/.svn`), but ensures sibling directories (project2 and project3) are found.
