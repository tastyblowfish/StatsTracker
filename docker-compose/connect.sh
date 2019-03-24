docker run \
  -it --rm \
  --link pg-node-statstracker:postgres \
  postgres \
  psql \
  -h postgres \
  -U statsadmin \
  statstracker
