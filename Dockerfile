FROM jekyll/jekyll:3.6.2 as builder

COPY --chown=jekyll:jekyll . /home/jekyll/src
WORKDIR /home/jekyll/src

RUN bundle install && \
    bundle exec jekyll build --destination /home/jekyll/build --trace

FROM nginx:1.21.0-alpine

## These are here to resolve cyber vunls.
RUN apk update && \
    apk --no-cache add \
    curl=~7.77.0-r1 \
    libcurl=~7.77.0-r1 \
    libxml2=2.9.10-r7

COPY server/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/jekyll/build /usr/share/nginx/html