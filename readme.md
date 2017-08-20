# Photography by Derek McBurney
This is the code behind my photography website, [photographybyderek.com](http://photographybyderek.com)

## Author
[Derek McBurney](http://dmcbdesign.com)

## License
This code cannot be used commercially without the written consent of
Derek McBurney. **Non-commercial use requires attribution.**

## To build the site
1. [Get docker](https://www.docker.com)
2. `docker run --rm -it -v "$(pwd)":/app evanshunt/taskrunner npm install`
3. `docker run --rm -it -v "$(pwd)":/app evanshunt/taskrunner grunt build`
4. The JPGs have now been produced for every size, and the tiny sizes will be base64 encoded and embedded directly into pages in the following step. This is the opportunity for further compression of the JPGs via [TinyPNG](https://tinypng.com/). Ideally this would be done programatically in the Grunt taskrunner, but using the TinyPNG API costs money and I'm too cheap.
5. `docker run --rm -it -v "$(pwd)":/app evanshunt/taskrunner jekyll build`
