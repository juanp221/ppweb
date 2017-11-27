!/bin/sh
echo "Instalando proyecto Personal!"
docker build -t proyecto .
#ocker run -p 80:80 proyecto
echo "Ejecutando Pagina Web"
docker run -p 9000:80 proyecto