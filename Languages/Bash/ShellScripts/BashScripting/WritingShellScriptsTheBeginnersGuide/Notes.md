# Notes

The `my_script.sh` file in this same directory is a scratch file I created to follow along with this article.

To execute the scripts in `my_script.sh` simply type a period, forward slash, and then the path to the file.

For example, if your location in terminal is the directory as the file, then run this command `./my_script.sh`.

If your location in terminal is up one directory from the file, then run this command `./<directory that the file is located in>/my_script.sh`.

Note: if you receive a `Permission denied` response, permissions have to be granted/changed.
To accomplish this, run the `chmod` command.

---

echo $PATH

---

The Shebang (#!)

#!/bin/bash

---

Formatting

---

Variables

`#` comments out the line

if function
```#if [ 35 -gt 0 ]
#then
#    echo "Greater"
#fi```

Assignment of string to variable
`str="Current date is `date`"`

Print variable value to console
`echo $str`

For loop
```
for i in 1 2 3
do
echo "hello world $i"
done
```

