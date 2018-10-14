#!/usr/bin/env bash

# Start sshd
exec sudo /usr/sbin/sshd -D &

# Server start
exec yarn run docker
