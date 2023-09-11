#!/bin/bash

if [[ "$1" == "start" ]]; then
    ldmtool create all
    mkdir /media/kolia/Backup
    mount /media/kolia/Backup -L Backup
    exit 0
fi;

if [[ "$1" == "stop" ]]; then
    umount /media/kolia/Backup
    ldmtool remove all
    rm -r /media/kolia/Backup
    exit 0
fi;

echo "Missing \"start\" or \"stop\" command"
exit 1
