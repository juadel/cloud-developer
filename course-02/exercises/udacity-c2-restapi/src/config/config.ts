export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": "conAPM35",
    "database": "udagramdelgadodev",
    "host": "udagramdelgadodev.chocxswmc6av.ca-central-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "ca-central-1",
    "aws_profile": "udagram-delgado-dev",
    "aws_media_bucket": "udagram-delgado-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
