# card-validation

## Índice

* [1. Resumen](#1-resumen)
* [2. Imagen final del proyecto](#2-imagen-final-del-proyecto)
* [3. Investigación UX](#3-investigación-ux)
* [4. Acceso al proyecto](#4-acceso-al-proyecto)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Resumen

Plataforma de pago de un restaurante, con una primera vista donde se muestran las promociones antes de ir al pago y otra vista donde se piden los datos para validar el medio de pago (tarjeta).

## 2. Imagen final del proyecto

![Vista 1](https://user-images.githubusercontent.com/105660480/172178943-7ff2bc5e-5319-4171-bf08-28ba3614b6c0.png)
![Vista 2](https://user-images.githubusercontent.com/105660480/172179063-48b0ce15-e7f7-4f28-a2cc-60b22785a144.png)

## 3. Investigación UX

### ¿Quienes son mis usuarios?
Mis usuarios son los clientes que ingresen a la plataforma del restaurante y deseen iniciar su proceso de pago para concretar su pedido de manera rápida.

### ¿Cómo soluciono sus problemas?
Realizando la validación previa de la tarjeta para que se reduzcan los problemas que puedan existir al generar el pago.

### Historias de usuario

##### `Historia de usuario N°1`
*Como* usuario de la aplicación del negocio
*busco* validar mi tarjeta para el pago de mi pedido
*para* poder tener mi producto lo más pronto.

##### `Historia de usuario N°2`
*Como* usuario de la aplicación
*busco* ocultar el número de mi tarjeta
*para* poder mantener mi seguridad.

### Primer prototipo
![Vista 1_Old](https://user-images.githubusercontent.com/105660480/171695678-ab21b902-e8b9-4e51-bc61-bc0a725161dc.png)
![Vista 2_Old](https://user-images.githubusercontent.com/105660480/171695819-0c643906-66f3-4568-a206-f9ec91242093.png)

### Feedback

Durante las distintas etapas de realización del proyecto se recibió feedback tanto de coaches como de compañeras. Los feedbacks respecto al código fueron de utilidad para optimizar su entendimiento y función, mientras que tras recibir feedback respecto al diseño inicial y tras reflexión propia se optó por agregar más elementos y rehacer el prototipo.

### Prototipo final
![Nuevo_prototipo_Vista1.png](https://user-images.githubusercontent.com/105660480/171694731-efe16c98-0bf6-4f39-a10d-548d98b89c38.png)
![Nuevo prototipo_Vista 2](https://user-images.githubusercontent.com/105660480/171694958-30292084-3b05-46fb-b7f2-450be1f12dd3.png)

## 4. Acceso al proyecto
Se accede al proyecto mediante el siguiente enlace de Git Hub Pages: https://lxsca00.github.io/LIM018-card-validation/

## 5. Criterios de aceptación mínimos del proyecto

Usa solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].

### Definición del producto

En el `README.md`, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos
4 caracteres.
* No debe poder ingresar un campo vacío.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar y
cómo tu aplicación lo soluciona.

* Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
* Luego valida esta solución con una compañera (pedir feedback).
* Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un
  nuevo prototipo usando alguna herramienta para diseño de prototipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Google Slides](https://www.google.com/intl/es/slides/about/), etc.)
Estos puntos los presentarás en el `README.md`.

### Scripts / Archivos

#### General

##### `README.md`

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML y CSS)

Deberás maquetar de forma exacta el prototipo final que hiciste en la herramienta
de diseño de prototipos que escogiste utilizando HTML y CSS. En este momento elegirás
los colores, tipo de fuente, etc a usar.

A continuación describimos los archivos que utilizarás:

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

##### `src/style.css`

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, solo
  JavaScript puro también conocido como Vanilla JavaScript.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).