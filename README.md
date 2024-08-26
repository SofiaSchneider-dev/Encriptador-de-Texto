# Encriptador-de-Texto

Este proyecto es una herramienta web sencilla para la encriptación de texto, desarrollada como parte del programa Oracle Next Education (ONE) de Oracle y Alura. La herramienta permite a los usuarios encriptar y desencriptar texto utilizando un cifrado de sustitución básico.

## Características

- **Encriptación de Texto**: Encripta texto reemplazando vocales con cadenas específicas.
- **Desencriptación de Texto**: Revierte el proceso de encriptación para devolver el texto a su forma original.
- **Interfaz de Usuario**: Una interfaz simple e intuitiva con secciones para la entrada, procesamiento y salida de texto.

## ¿Cómo Funciona?

El proceso de encriptación funciona sustituyendo cada vocal en el texto de entrada con una cadena correspondiente:
- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

La desencriptación revierte estas sustituciones para recuperar el texto original.

### Ejemplo

- **Entrada**: `hola`
- **Encriptado**: `hoberlai`
- **Desencriptado**: `hola`

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: El archivo HTML principal que contiene la estructura de la página web.
- `styles.css`: El archivo CSS que maneja el estilo de la página web.
- `script.js`: El archivo JavaScript que contiene la lógica para la encriptación y desencriptación de texto.

## Cómo Utilizar

1. Clona el repositorio en tu máquina local.
2. Abre `index.html` en tu navegador web preferido.
3. Escribe el texto que deseas encriptar o desencriptar en el área de texto proporcionada.
4. Haz clic en el botón "Encriptar" para encriptar el texto o en el botón "Desencriptar" para desencriptarlo.
5. El resultado se mostrará en la sección de salida.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
