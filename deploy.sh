#!/bin/bash

ssh -i ~/.ssh/ucadmin-ant-pri.pem -p 7013 ucadmin@ant.dev.ucconnect.co.th "cd /home/ucadmin/line-man/frontend && git pull"
