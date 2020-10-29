#!/bin/bash

lpstat -p -d

fswatch -0 test | while read -d "" event; do; lp -d Stanford_VPTL $event; done;
