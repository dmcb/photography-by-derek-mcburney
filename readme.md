# Photography by Derek McBurney
This is the code behind my photography website, [photographybyderek.com](https://photographybyderek.com)

## Author
[Derek McBurney](http://derekmcburney.com)

## License
This code cannot be used commercially without the written consent of
Derek McBurney. **Non-commercial use requires attribution.**

## To build the site
1. [Get docker](https://www.docker.com)
2. `docker run --rm -it -v "$(pwd)":/app dmcb/taskrunner npm install`
3. `docker run --rm -it -v "$(pwd)":/app dmcb/taskrunner grunt build`
4. `docker run --rm -it -v "$(pwd)":/app dmcb/taskrunner jekyll build`
