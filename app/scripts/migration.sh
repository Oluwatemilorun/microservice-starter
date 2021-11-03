#!/bin/sh

ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -n app && ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run
