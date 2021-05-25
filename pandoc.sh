#!/bin/sh
pandoc -s -c style.css -o SimonStaszkiewiczResume.html --self-contained SimonStaszkiewiczResume.md
pandoc -o SimonStaszkiewiczResume.docx SimonStaszkiewiczResume.md
