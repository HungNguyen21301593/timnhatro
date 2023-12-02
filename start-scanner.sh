#!/bin/sh
git pull origin && podman-compose.exe -f docker-compose-scanner.yml up -d --build