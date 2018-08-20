# Command Line Exercise Solutions

## Exercise 1
`mkdir backend-class`

`cd backend-class`

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

`cd ~/backend-class/terminal-exercises`

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

## Exercise 4

This is an example of an alias that will accomplish all of the exercise objectives:

`alias kapow='mkdir shazam && cd $_ && touch magic-wand.txt && echo -e "1\n2\n3\n4\n5" >> magic-wand.txt'`
