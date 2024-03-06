[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

# Práctica 7 - Modificación

Guillermo Emmanuel González Méndez - alu0101466941
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GARTOLO/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GARTOLO/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GARTOLO/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-GARTOLO?branch=main)

## Índice

- [Introducción](#introducción)
- [Objetivos](#objetivos)
- [Desarrollo de la práctica](#desarrollo-de-la-práctica)
- [Modificación](#modificación)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)

## Introducción

En esta práctica se resolverán una serie de ejercicios relacionados con clases e interfaces genéricas y los principios SOLID. Todos los ejercicios deberán ser resueltos teniendo en cuenta estos principios. Además en esta práctica comenzaremos a utilizar informes de cubrimiento de código mediante Coveralls y Istanbul.

## Objetivos

- Utilizar clases e interfaces genéricas.
- Aplicar los principios SOLID en el desarrollo de software.
- Utilizar herramientas de análisis de código y pruebas unitarias.
- Utilizar informes de cubrimiento de código.

## Desarrollo de la práctica

Para el desarrollo de la práctica lo primero que hemos configurado son los informes de cubrimiento de código mediante Coveralls e Istanbul. Hemos instalado las dependencias y creado el script `"coverage": "nyc npm test && nyc report --reporter=lcov"` en el `package.json` para generar el informe de cubrimiento de código. También hemos configurado las GitHub Actions para que hacer los tests en varias versiones de Node.js y subir automáticamente el informe de cubrimiento de código a Coveralls.

También hemos añadido los badges de Coveralls y GitHub Actions (tests) al inicio de este README.md. En el caso del Coverage, no tenemos el 100% debido a los tests que no fueron terminados en la modificación, pero consultando en detalle se puede observar que mantenemos el 100% en el resto de ejercicios.

En cuanto a la resolución de los ejercicios, se detallan individualmente a continuación.

### Ejercicio 1 - La mudanza

Para la resolución de la mudanza, hemos creado en primer lugar una interfaz `Item` que almacena los campos `name` y `weight` (opcional) pudiendo añadir más atributos en el futuro. A continuación, hemos creado una clase `Box` que almacena un array de `Item`. Contamos con las operaciones básicas para añadir, eliminar, listar y buscar elementos en la caja. En esta clase también podríamos mantener un peso máximo y comprobar que no se sobrepase, pero no lo hemos implementado en este caso. Por último, hemos creado una clase `MovingService` que contiene un array de `Box` y las operaciones básicas para añadir, eliminar, listar y buscar items en todas las cajas.

De esta manera gestionamos mediante clases genéricas la mudanza, pudiendo añadir más funcionalidades en el futuro sin tener que modificar el código de las clases existentes.

### Ejercicio 2 - Facturas en diferentes formatos

Para la resolución de este ejercicio hemos creado una clase principal `Invoice` que contiene los detalles de la factura como el número de factura, nombre de cliente, fecha, etc, y un array de productos, para el que hemos creado un tipo `Product` que contiene el nombre y precio, y un tipo `Article` que contiene el producto y la cantidad.

Contamos con una interfaz `InvoiceGenerator` que contiene el método `generateInvoice` que recibe una factura y exporta la factura en el formato deseado. Para ello hemos creado dos clases que implementan esta interfaz, `PDFInvoiceGenerator` y `HTMLInvoiceGenerator`, que generan la factura en formato PDF y HTML respectivamente. Estas facturas se guardan en una carpeta llamada invoices. Esto nos permite añadir nuevos formatos de factura en el futuro sin tener que modificar el código de la clase `Invoice`, simplemente creando una nueva clase que implemente la interfaz `InvoiceGenerator`, respetando así el principio SOLID Open/Closed.

Por último hemos creado una clase `BillingSystem` que recibe un generador como parámetro y nos permite ejecutar el método `generateInvoice` para generar la factura en el formato deseado añadiendo como parámetro la factura que queremos generar.

Hemos utilizado las librerías `pdfkit` y `fs` para generar el PDF y `fs` para generar ambos.

### Ejercicio 3 - Gestor de ficheros

Este código viola el Principio de Responsabilidad Única (SRP) de SOLID. La clase `FileManager` tiene dos responsabilidades, la de leer y escribir archivos. Para solucionar esto, se puede dividir la clase en dos, una para leer y otra para escribir, de la siguiente manera:

```typescript
class FileReader {
  constructor(private filePath: string) {}

  public readFile(): string {
    ...
  }
}

class FileWriter {
  constructor(private filePath: string) {}

  public writeFile(content: string): void {
    ...
  }
}
```

De esta manera, cada clase tiene una única responsabilidad, y si en el futuro se añade una nueva funcionalidad, no será necesario modificar el código de las clases existentes.

### Ejercicio 4 - Impresoras y escáneres

Este código viola el Principio de Segregación de Interfaces (ISP) de SOLID. Esto es principalmente a que la interfaz PrintableScannable tiene dos responsabilidades, y la clase Printer solo necesita la funcionalidad de imprimir, no la de escanear, la cuál se utiliza en la clase Scanner, pero ambas deben de implementar la interfaz PrintableScannable. Para solucionar esto, se puede dividir la interfaz en dos, una para imprimir y otra para escanear, de la siguiente manera:

```typescript
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}

class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}
```

### Ejercicio 5 - Servicio de mensajería

El código proporcionado en el ejercicio no cumple el principio de inversión de dependencias (DIP) de SOLID. Este principio establece que los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. En este caso, la clase `Notifier` depende directamente de las clases concretas `EmailService` y `ShortMessageService`, en lugar de depender de una abstracción. Para esto añadimos una interfaz `NotificationService`, para que ambas clases la implementen, y la clase `Notifier` dependa de esta interfaz. De esta manera, si en el futuro se añade un nuevo servicio de notificación, solo se necesitará implementar la interfaz `NotificationService` y añadirlo a la clase `Notifier`, sin necesidad de modificar el código de la clase `Notifier`.

```typescript
interface NotificationService {
  notify(message: string): void;
}

class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");
```

## Modificación

En cuanto al ejercicio correspondiente a la modificación, hemos implementado la interfaz genérica `Arithmeticable` para representar dichos métodos. Con la clase `ArithmeticableCollection` de tipo genérico T y que extiende a la interfaz `Arithmeticable`, representamos una colección de métodos a los que aplicar las operaciones. Entre estos métodos, hemos implementado las clases `Complex` y `Rational` para representar numeros complejos y racionales respectivamente. Hemos añadido las operaciones básicas y necesarias para el funcionamiento de las operaciones.

Con los métodos de la clase `ArithmeticableCollection` podremos añadir un nuevo elemento a la colección, obtener un elemento por su índice y obtener el número total de elementos en la colección.

## Conclusiones

En esta práctica hemos aprendido a utilizar clases e interfaces genéricas y a aplicar los principios SOLID en el desarrollo de software. Hemos utilizado herramientas de análisis de código y pruebas unitarias, y hemos utilizado informes de cubrimiento de código. Hemos aprendido a configurar GitHub Actions para que haga los tests en varias versiones de Node.js y suba automáticamente el informe de cubrimiento de código a Coveralls.

## Bibliografía

- [Error type uknkown](https://www.totaltypescript.com/concepts/object-is-of-type-unknown)
