#!/bin/bash

mongo localhost/test --quiet initial.js

for file in ./queries/*.js; do
    mongo localhost/test --quiet $file > ./results/${file##*/}.txt
done