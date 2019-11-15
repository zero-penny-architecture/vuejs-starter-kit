FROM nginx:stable-alpine
# Requires that dist folder has been built in a previous stage using yarn build
LABEL maintainer="Alessandro Sanino <alessandro@sanino.dev>"
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'