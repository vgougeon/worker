#!/bin/bash

project_id=$1
path_template="/opt/worker/template/"
repo_url=$2
local_port=$3
public_port=$4

if [ "$(docker ps -a | grep ${project_id}-user-project)" ]; then
    echo "container already exists"
    docker stop "${project_id}-user-project"
    docker rm "${project_id}-user-project"
    echo "container deleted"

fi

ansible-playbook $path_template/deploy_nginx.yml -Dvv --extra-vars "git_url=$repo_url container_name='${project_id}-user-project' local_port=$local_port public_port=$public_port project_id=$project_id"
