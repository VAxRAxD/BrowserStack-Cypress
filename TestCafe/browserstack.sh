#!/bin/bash
export $(grep -v '^#' .env | xargs)
echo $BROWSERSTACK_USERNAME
echo $BROWSERSTACK_ACCESS_KEY