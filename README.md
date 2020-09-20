# assingment-scg

## Softwear Require
- [nodejs v10.9.0](https://nodejs.org/en/download/)
- [newman v5.2.0](https://www.npmjs.com/package/newman)
- [docker v19.03.8](https://docs.docker.com/docker-for-windows/install/)
- [docker-compose v1.25.0](https://docs.docker.com/compose/install/)

## Build and Run Project
```sh
$ cd assinment-scg
$ docker-compose up -d
$ newman run atdd/api/DOSCG.postman_collection.json -e atdd/api/doscg.local_environment.json
```
web-page: [http://localhost:8080](http://localhost:8080)

backe-service: [http://localhost:3000](http://localhost:3000)