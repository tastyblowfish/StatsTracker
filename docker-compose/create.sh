mkdir -p ~/data/pg-node-statstracker
docker run \
  --name pg-node-statstracker \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=underpar \
  -e POSTGRES_USER=statsadmin \
  -e POSTGRES_DB=statstracker \
  -v ~/data/pg-node-statstracker:/var/lib/postgresql/data \
  -d \
  postgres
