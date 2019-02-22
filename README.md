# Road Eye App

## Historia de usuario:

Road Eye App es una aplicación que está dirigida a integrantes de dependencias de vialidad. Este proyecto estará enfocado al Departamento de Transporte de EUA (https://www.transportation.gov/)

Esta aplicación evalúa los indicadores de personas heridas en los distintos medios de movilidad del país[(*ver indicadores de movilidad analizados*)](#indicadores-de-movilidad-analizados) para poder tomar decisiones de impacto para los programas de concientización vial y así tener un referente de la calidad de implementación de los mismos.

  

## Especificaciones técnicas:

La aplicación utiliza una base de datos ya existente, se toma como rango una temporalidad de 10 años (2005 - 2015), para medir y comparar los datos de heridos a través del rango de tiempo que seleccione el usuario, visualizar la información y tomar decisiones pertinentes según los datos del indicador de movilidad seleccionado.

  

## Pasos para hacer uso de la aplicación:

  

1. El usuario de la aplicación necesita tener credenciales para ingresar (usuario y contraseña).

2. Al ingresar a la aplicación se mostrará los distintos indicadores analizados, [(*ver indicadores analizados*)](#indicadores-de-movilidad-analizados) en forma de rejilla. Cada módulo tendrá una imagen representativa del indicador analizado. El usuario tendrá oportunidad de seleccionar el indicador que desea visualizar.

3. Una vez seleccionado el indicador se mostrará una nueva pantalla donde aparezca la interfaz de dicho indicador. En esta pantalla se desplegarán los distintos métodos de filtrado [(*ver más detalles en métodos de filtrado*)](#métodos-de-filtrado).

4. El usuario puede navegar a través de la aplicación con el menú lateral para regresar al inicio u observar los indicadores de forma escrita en dicho menú.

  

## Indicadores de movilidad analizados:

  

- Avión (Total_Injured_Persons_Air)

- Autobus

	- Pasajeros de autobús (Total_Injured_Persons_Bus_Occupants)

- Automóvil

	- Accidentes de carretera (Total_Injured_Persons_Highway)

	- Pasajeros de automóvil (Total_Injured_Persons_Passenger_Car_Occupants)

- Bicicleta (Total_Injured_Persons_Pedalcyclists)

- Motocicleta (Total_Injured_Persons_Motorcyclists)

- Peatones (Total_Injured_Persons_Pedestrians)

  

## Métodos de filtrado

La aplicación contará con distintos filtros para visualizar la información tales como;

  

- Vista general (Overview) mostrará cantidad total de lesionados en un lapso de 10 años a través de una card, también los porcentajes de aumentos o disminución de acuerdo al año anterior.

- Ordenar de mayor a menor el total de lesiones por categoría.

- Ordenar de menor a mayor el total de lesiones por categoría.

  

El filtro que se verá por default es la vista general; el usuario elegirá que filtro visualizar según sus necesidades y puede alternar entre uno y otro filtro.