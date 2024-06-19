# TIMELINE API

## RUN APPLICATION

1. Start database with docker. You need was installed the docker and docker-compose (recommend [the Rancher Desktop](https://rancherdesktop.io/))
```ssh
## run
$ docker-compose up -d
```

2. Install packages on project
```ssh
## run
$ npm run i
```

3. Run migration to database
```ssh
## run
$ npx prisma generate
```

4. Start the server
```ssh
## run
$ npm run start:dev
```

## APPLICATION
- Create a timeline
- Show a timeline by id
- Generate the portfolio timeline with month/year list

## INFRA (TODO)
- Host the server
- Chose a database
- Chose a TypeORM
- Host database
