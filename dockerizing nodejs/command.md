<!-- to build image -->

docker build -t express-docker-image .

<!-- to list -->

docker image ls

<!-- to get the list of running container -->

docker ps

<!--  now image will be converted to container and run-->

docker run --rm -d -p 3000:3002 --name express-docker-container express-docker-image

-it => interactive mode - uses current terminal
-d => detached mode - runs in background

<!-- to stop a container -->

docker stop <container_id>

<!-- Volume binding in docker -->

Volume binding is a mechanism in Docker that allows you to persist data generated by a container beyond its lifecycle. Essentially, it creates a connection between a directory on your host machine and a directory inside the container.

<!-- volume binding command -->

docker run --rm -d -p 3002:3000 -v "$(pwd)":/app --name express-docker-container express-docker-image

<!-- if nodemon is not listening -->

"start": "nodemon -L index.js"

<!-- for getting enviornment variables -->

docker run --rm -d -p 3002:5500 -v "$(pwd)":/app -e PORT='5500' --name express-docker-container express-docker-image
docker run --rm -d -p 3002:5500 -v "$(pwd)":/app -e PORT='5500' -e MONGO_URI='' --name express-docker-container express-docker-image

<!-- for giving whole env file -->

docker run --rm -d -p 3002:5500 -v "$(pwd)":/app --env-file ./.env --name express-docker-container express-docker-image

<!-- to go inside container -->

docker exec -it express-docker-container /bin/bash
or
docker exec -it <container_id> /bin/bash

<!-- to view the logs inside the container -->

docker logs <container_id>

<!-- ----------------- while connecting to mongodb ---------------------- -->

docker run -d --rm --name mongodb-container \
-e MONGO_INITDB_ROOT_USERNAME='root' \
-e MONGO_INITDB_ROOT_PASSWORD='secret' \
mongo

<!-- go inside mongodb container -->

docker exec -it mongodb-container bash

<!-- sign in to mongo -->

mongosh -u root -p secret

<!--  to list all databses -->

show dbs

<!-- switch to admin user -->

use admin

<!-- to get the users -->

db.getUsers()
