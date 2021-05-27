#!/bin/sh

export GIT_COMMIT=$(git rev-parse HEAD)
npm run push
