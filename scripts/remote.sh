#!/bin/bash

rm -r backup/*
mv public_html/* backup
tar zxf site.tar.gz 
mv _site/* public_html
rm -r _site
rm site.tar.gz