# convergencelabs.com website
This repository hosts the source for the convergencelabs.com. The website is built using the [jeykll](https://jekyllrb.com/) static site generator. The site is ultimately packaged up into a docker container built using the supplied jenkinsfile.


## Dependencies

 * jeykll >= 3.6.x
 * docker


## Development Setup

 * Ensure development dependencies are installed for your platform.
 * bundle exec jekyll serve --incremental
 * Open http://localhost:4000


## Jekyll Build
If you just want to build the site run `jekyll build`. The site will be generated into the `_site` directory.