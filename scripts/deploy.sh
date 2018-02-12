#!/bin/bash

cd ..
tar czf site.tar.gz _site
scp site.tar.gz clabs15@dallas113.arvixeshared.com:site.tar.gz
ssh clabs15@dallas113.arvixeshared.com 'bash -s' < scripts/remote.sh
rm site.tar.gz