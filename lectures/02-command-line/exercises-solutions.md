# Command Line Exercise Solutions

## Exercise 1

`mkdir terminal-exercises`

`touch hello.txt`

## Exercise 2

`mv ~/Downloads/bacon.txt ~/terminal-exercises/veggies.txt`

`grep -oni nomnomnom ~/terminal-exercises/veggies.txt`

The result of the `grep` should be:

```
5:nomnomnom
15:nomnomnom
25:nomnomnom
31:nomnomnom
39:NOMNOMNOM
```

## Exercise 3

`cd ~/terminal-exercises`

`mkdir permissions`

`touch my-file.txt`

`vim my-file.txt`

Add a few lines of text -- whatever you want.
  - Don't forget to enter `insert mode` in vim by pressing the `i` key
  - `Shift + ZZ` to close and save the file with your changes

`chmod 400 my-file.txt`

To check the result of the `chmod` change: `ls -alt ./permissions`

This should be the result:

`-r--------  1 Brenna  staff    0 Jun 27 16:58 myfile.txt`
