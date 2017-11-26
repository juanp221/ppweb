!/bin/sh
echo "Instalando proyecto Personal!"
docker build -t proyecto .
docker run -p 80:80 proyecto