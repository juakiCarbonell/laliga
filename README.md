# La Liga App

Aplicacion para la Liga

## Instalacion

Inicializar la app

```bash
npm start
```
## Tests
```bash
npm test
```

## Consideraciones

Aparte de las librerias requeridas, he utilizado
- React icons, para anadir algunos icons
- React transition group. Para modificar un usuario, he pensado hacerlo en una form dentro de un modal. Dicho modal tiene una pequena animacion creada con esta libreria

Para crear el git hook, he instalado
- Husky para el pre-commit
- lint.stagged para hacer el linting los staged files
- Pretier  para formatear el codigo

Para el Testing
- Enzyme para anadir pequenas funcionalidades en los test
- enzyme-adapter-react-17 para la version 17, para poder ejecutar los test en react
- redux-mock-store para repoducir la store dentro de los test

