#!/bin/sh
pandoc -s -c style.css -o SimonStaszkiewiczResume.docx -o SimonStaszkiewiczResume.html SimonStaszkiewiczResume.md
pandoc -o SimonStaszkiewiczResume.docx SimonStaszkiewiczResume.md
