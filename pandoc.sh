#!/bin/sh
pandoc -s -c style.css -o SimonStaszkiewiczResume.html SimonStaszkiewiczResume.md
pandoc -o SimonStaszkiewiczResume.docx SimonStaszkiewiczResume.md
