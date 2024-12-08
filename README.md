x-environment: &default-environment
  DATABASE_URL: postgres://postgres:postgres@postgres:5432/postgres
  SECRET_KEY: xxxxx
  PORT: 8000 # If changing, change the web service port too
  GLITCHTIP_DOMAIN: https://glitchtip.pleichty.com
  DEFAULT_FROM_EMAIL: pleichty@gmail.com 
  CELERY_WORKER_AUTOSCALE: "1,3"

x-depends_on: &default-depends_on
  - postgres
  - redis

services:
  postgres:
    image: postgres:17
    environment:
      POSTGRES_HOST_AUTH_METHOD: "trust" 
    restart: unless-stopped
    volumes:
      - pg-data:/var/lib/postgresql/data
  redis:
    image: valkey/valkey
    restart: unless-stopped
  web:
    image: glitchtip/glitchtip
    depends_on: *default-depends_on
    ports:
      - "8000:8000"
    environment: *default-environment
    restart: unless-stopped
    volumes:
      - uploads:/code/uploads
  worker:
    image: glitchtip/glitchtip
    command: ./bin/run-celery-with-beat.sh
    depends_on: *default-depends_on
    environment: *default-environment
    restart: unless-stopped
    volumes:
      - uploads:/code/uploads
  migrate:
    image: glitchtip/glitchtip
    depends_on: *default-depends_on
    command: ./bin/run-migrate.sh
    environment: *default-environment

volumes:
  pg-data:
  uploads: