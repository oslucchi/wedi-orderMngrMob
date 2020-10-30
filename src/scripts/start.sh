#!/bin/bash
ls `pwd`/src/environment/$1.json
node src/scripts/set-env `pwd` $1
expo start