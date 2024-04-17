#!/bin/bash

if [ $# -lt 1 ]; then
   echo "<Error> Usage URL"
   exit 1
fi

safe_filename=$(echo "$1" | sed 's/[^a-zA-Z0-9]/_/g')

echo "Se va a ejecutar $1"
pa11y --config /workspace/pa11y.config.json --reporter html "$1" > "./reports/${safe_filename}_reporter.html"
