#!/bin/bash
export $(grep -v '^#' .env | xargs)
export BROWSERSTACK_USE_AUTOMATE=1
export BROWSERSTACK_CAPABILITIES_CONFIG_PATH="./browserstack-config.json"