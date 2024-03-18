# to run the project
docker compose up

# to load base data once the postgres container is running
docker exec -i {CONTAINER_ID} psql -U postgres -d froullete < api/test_db.sql