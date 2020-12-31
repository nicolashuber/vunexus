# Vunexus

### Docker images
```
docker-compose build --pull
```

### Yarn
```
docker-compose run --rm --user $(id -u):$(id -g) app yarn
```

### Vue CLI
```
docker-compose run --rm --user $(id -u):$(id -g) app vue
```

### Development server
```
docker-compose up app
```