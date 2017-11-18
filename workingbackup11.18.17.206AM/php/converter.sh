#!/bin/bash
export HOME=/var/www/html/php/temp/ && libreoffice --headless --convert-to pdf $1 --outdir $2
