Road eye App
enter image description here

Planteamiento:
Road eye App es una aplicación que está dirigida a integrantes de dependencias de vialidad. Este proyecto está enfocado al Departamento de Transporte de EUA (https://www.transportation.gov/)
Esta aplicación evalúa los indicadores de heridos en los distintos medios de transporte del país para poder tomar decisiones de impacto para los programas de concientización vial y así tener un referente de los mismos.

Sección de prototipado:
Baja fidelidad enter image description here
enter image description here

Alta fidelidad
enter image description here

(https://www.figma.com/proto/aqvi9w8kvlnEWFTEqYi7DxJo/Mobile-View?node-id=6%3A0&scaling=scale-down)

Historias de usuario:
El usuario necesita ingresar las credenciales a la aplicación para consultar los indicadores de heridos en los distintos medios de movilidad del país para poder tomar decisiones de impacto para los programas de concientización vial y así tener un referente de la calidad de su implementación.

 -DoD: Hacer un fork al proyecto para crear una rama master y posteriormente hacer branches para poder utilizar remotamente el repositorio ambas. La aplicación necesita verse en github pages. El HTML de la primer pantalla debe de tener un formato adecuado (Material Design Lite)**![enter image description here](https://lh3.googleusercontent.com/qi_UwmSt1xKdrYbLBweik-rhVngfhAiMbbbqgLd5MtPiT2YlNVIGfdhb-Px1At1kBXlf_ewSidHJ "Logo App"). Implementar las versiones responsive. Posteriormente se aplicarán los estilos CSS para cuestiones de diseño (en otro sprint). Debe de haber 1 usuario y una contraseña de prueba (temporalmente solo habrá 1, según las iteraciones y las tareas prioritarias se podrá crear un usuario). Debe de haber dos inputs; uno de usuario y otro de contraseña y un botón de entrar. Al darle click a entrar te llevará a otra interfaz HTML de la siguiente pantalla. Dicha pantalla estará en blanco por el momento.
 -DoD: Para el viernes 22 se entregará un prototipo de alta fidelidad con sus respectivos test con 10 usuarios. Previamente se hicieron test de baja fidelidad en lápiz y papel para validar el diseño de la interfaz en alta fidelidad.
**Material Design Lite: https://getmdl.io/

El usuario necesita visualizar los datos del indicador que seleccionó en el menú, tiene dos opciones de visualizaciones una vista general y los datos cronológicos. La vista general le servirá para tener un panorama inmediato del indicador mostrando el año anterior y el actual. Los datos cronológicos servirán para detectar mejoras a largo plazo mediante los indicadores de aumento o disminución.

 -DoD:Debe haber dos tabs uno para vista general y otro de datos cronológicos; cada tabs abarcan el 50% de la pantalla. 
 -DoD:Terminar la interfaz funcional y diseñada de la primer pantalla de login.
 -DoD:Generar una función que nos muestra solo datos de 6 años (2010-2015).
 -DoD: Diseñar el logo de la app.
 -DoD: En la vista general debe de haber el icono del indicador que se esta trabajando, el título del indicador.
 -DoD: Debe de haber una sección de oportunidades de mejora donde se mostrará el indicador del año anterior y el actual marcado con rojo o verde el estatus actual (aumento o disminución).
 -DoD: Habrá una sección donde se comparen dichos indicadores mostrando el porcentaje de aumento o disminución del indicador.	
 -DoD: Hacer 5 pruebas de testeo con usuarios random del prototipo de alta fidelidad (figma).
El integrante de la institución necesita tener una interfaz inicial para visualizar las categorías de movilidad.

 -DoD: Necesita tener una barra de navegación. En la parte superior izquierda habrá un icono que proximamente desplegará un menú deslizable de izquierda a derecha. Dicha barra debe de estar fija en la parte superior cuando el usuario haga scroll.
 -DoD: Habrá 6 botones diferentes para cada una de las categorías (autobús, automóvil, motocicleta, bicicleta, peatones y avión).
 -DoD: Generar un logo que irá en la barra de navegación.
 -DoD: El logo de la barra de navegación tendrá la capacidad de estar en todas las pantallas y al darle click te mande a la pantalla de inicio.
 -DoD: Definir una caja de texto con instrucciones para el usuario.
El usuario de la aplicación necesita acceder a un menú deslizable para poder elegir los distintos indicadores, así como regresar al inicio o cerrar sesión.

 -DoD: Se necesita el menú deslizable del framework (components->layout).
 -DoD: Se dedicará un cuadrante del menú para poner el logotipo así como información del usuario como su nombre y su correo.
 -DoD: Elementos del menú con ancla para los links de: Inicio, Autobús, Automóvil, Avión, Bicicleta, Motocicleta, Peatones y Botón de Cerrar Sesión.
 -DoD: Css general de diseño.
Quien utiliza Road eye App:
Hombres y mujeres mayores de 25 años que son integrantes de alguna dependencia de vialidad, que se dedican a evaluar los programas, analizando estadísticas y comparando información para que según los resultados se propongan campañas de mejora. El usuario utiliza mayormente la versión de desktop ya que en su espacio de trabajo cuenta con una computadora de escritorio sin embargo en ocasiones necesita la versión móvil para revisar información de forma rápida en juntas de trabajo.

Especificaciones técnicas:
La aplicación utiliza una base de datos ya existente, se toma como rango de temporalidad de 10 años (2005 - 2015), para medir y comparar los datos de heridos a través del rango de tiempo que seleccione el usuario y así visualizar la información y tomar decisiones pertinentes según los datos del medio de transporte seleccionado.

Pasos para hacer uso de la aplicación:
El usuario de la aplicación necesita tener credenciales para ingresar (Usuario y contraseña).
Al ingresar a la aplicación se mostrará los distintos indicadores analizados, (ver indicadores analizados)** en forma de rejilla. Cada módulo tendrá una imagen representativa del indicador analizado. El usuario tendrá oportunidad de seleccionar el indicador que desea visualizar.
Una vez seleccionado el indicador se mostrará una nueva pantalla donde aparezca la interfaz de dicho indicador. En esta pantalla se desplegarán los distintos métodos de filtrado (ver más detalles en métodos de filtrado)*.
El usuario puede navegar a través de la aplicación con el menú lateral para regresar al inicio u observar los indicadores de forma descrita.
Indicadores de movilidad analizados**:
Avión (Total_Injured_Persons_Air)
Autobus
Pasajeros de autobús (Total_Injured_Persons_Bus_Occupants)
Automóvil
Accidentes de carretera (Total_Injured_Persons_Highway)
Pasajeros de automóvil (Total_Injured_Persons_Passenger_Car_Occupants)
Bicicleta (Total_Injured_Persons_Pedalcyclists)
Motocicleta (Total_Injured_Persons_Motorcyclists)
Peatones (Total_Injured_Persons_Pedestrians)
Métodos de filtrado *
La aplicación contará con distintos filtros para visualizar la información tales como;

Vista general (Overview) mostrará cantidad total de lesionados en un lapso de 6 años (2010-2015) también los porcentajes de aumentos o disminución de acuerdo al año anterior.
Ordenar de mayor a menor el total de lesiones por categoría.
Ordenar de menor a mayor el total de lesiones por categoría.
El filtro que se verá por default es la vista general; el usuario elegirá que filtro visualizar según sus necesidades y puede alternar entre uno y otro filtro.