[![Build Status](https://travis-ci.com/JamesHuangUC/Clean-Youtube.svg?branch=master)](https://travis-ci.com/JamesHuangUC/Clean-Youtube)
[![Docker Build Status](https://img.shields.io/docker/build/jrottenberg/ffmpeg.svg)](https://hub.docker.com/r/huangjames/clean-youtube/)

# Clean-Youtube
This project shows how does React+TravisCI+Docker+Heroku work together. The React code is pulled from Stephen Grider's github [repository](https://github.com/StephenGrider/ReduxCasts/tree/master/video_browser).

Check out this project in your browser: https://clean-youtube.herokuapp.com

# Run it in Docker :whale:
```
docker pull huangjames/clean-youtube
docker run -it --rm -p 8080:80 huangjames/clean-youtube nginx -g 'daemon off;'
# open localhost:8080 in your browser
```
