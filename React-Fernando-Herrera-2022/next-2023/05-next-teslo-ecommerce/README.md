# Next.js Telo Shop

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

- El -d, significa **detached**

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/teslodb
```

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas

Llamara:

```
http://localhost:3000/api/seed
```

## Es una API Que utiliza cache, si al API no cambio te regresa el cache sin necesidad de llamar nuevamente.

```
https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr
```
