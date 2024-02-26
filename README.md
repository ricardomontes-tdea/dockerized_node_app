# dockerized_node_app

This app was created in order to show within a siple example how a load_balancer works. It was created under Node.js and 
using Express to implemente web servers.

## Initial setup

### Requirements
- Docker Desktop

### installation steps
- After pulling master branch you will need to run `npm install` to install all dependencies.
- Finishing installation you will need to run `docker build . -t load-balancer:latest`
- When docker images finished, run `docker run -p 3001:4000 -p 3002:4001 load-balancer:latest`
- Link to `localhost:3001` and `localhost:3002`