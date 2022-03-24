#!/bin/bash

fPort=$1
lPort=$2

for ((port = $fPort; port <= $lPort; port++)); do
   res=$(netstat -anpe | grep "$port" | grep "LISTEN")

   if [ -z "$res" ]; then
      echo "$port";
      break
   fi
done
exit 0
