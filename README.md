# convergencelabs.com website
This repository hosts the source for the convergencelabs.com. The website is built using the [jeykll](https://jekyllrb.com/) static site generator. The site is ultimately packaged up into a docker container built using the supplied jenkinsfile.

## Dependencies

 * ruby, gem
 * jeykll >= 3.6.x
 * docker

## Development Setup

 * Ensure development dependencies are installed for your platform.
 * bundle exec jekyll serve --incremental
 * Open http://localhost:4000

## Jekyll Build
If you just want to build the site run `jekyll build`. The site will be generated into the `_site` directory.

## Docker Build
If you just want to build the site run `docker build -t convergencelabs-com .`. The site will be generated into the `_site` directory.

## Deployment
To deploy on Arvixe:

* JEKYLL_ENV=production jekyll build
* cd scripts && sh deploy.sh

## Cross-posting to Medium 
We're using a customized version of the [`jekyll-crosspost-to-medium`](https://github.com/aarongustafson/jekyll-crosspost-to-medium) plugin.

To execute the cross-post:
1. Get your medium integration token from your [settings](https://medium.com/me/settings).
1. Set a couple environment variables:
   ```
   export MEDIUM_USER_ID=8214ea30605c
   export MEDIUM_INTEGERATION_TOKEN=<token>
   ```
1. Add `crosspost_to_medium: true` to the post header
1. Do a `jekyll build`. The plugin automatically keeps track of what is has posted in a `.jekyll-crosspost_to_medium` directory.

