#!/bin/bash

project_id=$1

if [ "$(docker ps -a | grep ${project_id}_)" ]; then
    stats=$(docker stats $project_id --no-stream --format "{{.ID}}_{{.Name}}_{{.CPUPerc}}_{{.MemUsage}}_{{.MemPerc}}")
    port=$(docker port $project_id)
    echo "${stats}_${port}"
fi