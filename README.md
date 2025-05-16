# Weather App

Aplicación web para consultar el tiempo de una serie de ciudades. La aplicación cuenta con un Sidebar con un desplegable de las ciudades y un enlace a la pantalla de contacto donde se podrá rellenar un formulario para realizar cualquier consulta al equipo de Weather App. La parte del header cuenta con un menu de hamburguesa para cerrar y abrir el menú Sidebar, un selector de idiomas y un botón para hacer logout en la aplicación.

El tiempo se presenta en forma de tarjeta, imitando así las aplicaciones moviles de consulta meteorológica. 

Toda la aplicación está securizada por lo que el punto de partida es el login. Para gestionar este estado de autenticación utlizamos Zustan para globalizar este estado.

Para correr la aplicación debes implementar el .env tal y como está el .env.example, tienes que sustituir la AppId/Token del api https://openweathermap.org/api.

La aplicación cuenta con Test unitarios con Vitest y Linter con prettier para cumplir con reglas de buen uso.

La aplicación cuenta con una **integración** continua con GitHub.





## Stack:



![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)