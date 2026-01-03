FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy version-1 as the main version
COPY version-1/ /usr/share/nginx/html/js-essentials/

# Copy version-2 to v2 subdirectory
COPY version-2/ /usr/share/nginx/html/js-essentials/v2/

# Remove unnecessary files from the image
RUN rm -f /usr/share/nginx/html/js-essentials/Dockerfile \
    /usr/share/nginx/html/js-essentials/nginx.conf \
    /usr/share/nginx/html/js-essentials/.dockerignore \
    /usr/share/nginx/html/js-essentials/*.md \
    /usr/share/nginx/html/js-essentials/*.docx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
