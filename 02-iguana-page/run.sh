docker build -t 02-iguana-page . && docker run -it -p 3000:3000 -v $(pwd)/app:/usr/src/app 02-iguana-page