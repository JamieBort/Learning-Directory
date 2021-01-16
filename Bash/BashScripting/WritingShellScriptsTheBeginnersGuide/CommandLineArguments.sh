#!/bin/bash

# Command line arguments are commonly used and easy to work with so they are a good place to start.

# When we run a program on the command line you would be familiar with supplying arguments after it to control its behaviour. For instance we could run the command ls -l /etc. -l and /etc are both command line arguments to the command ls. We can do similar with our bash scripts. To do this we use the variables $1 to represent the first command line argument, $2 to represent the second command line argument and so on. These are automatically set by the system when we run our script so all we need to do is refer to them.

# Let's look at an example.

# A simple copy script

#cp $1 $2

echo $0
echo Details for $2

#ls -lh $2