# ✈️ Sistema Web de Reservas y Gestión de Transporte – Aeropuerto Jorge Chávez

## 📄 Descripción del Proyecto
El **Sistema Web de Reservas y Gestión de Transporte del Aeropuerto Jorge Chávez** es una solución tecnológica diseñada para modernizar y optimizar la manera en que los pasajeros solicitan servicios de transporte desde y hacia el aeropuerto.

El sistema ofrece una experiencia de uso sencilla y segura, permitiendo a los **viajeros** gestionar sus traslados de forma autónoma y a los **administradores** supervisar y controlar todas las operaciones desde un único panel de control.

---

## 🎯 Objetivos

### Objetivo General
Desarrollar e implementar un sistema web que permita la reserva y administración de transporte para el Aeropuerto Jorge Chávez, brindando un servicio rápido, seguro y accesible.

### Objetivos Específicos
1. Implementar registro e inicio de sesión con identificación de roles.
2. Permitir reservas especificando fecha, hora, punto de recogida y destino.
3. Mantener un historial de reservas realizadas.
4. Facilitar al administrador el control de usuarios y vehículos.
5. Garantizar seguridad y disponibilidad de la información.
6. Diseñar una interfaz clara y comprensible para todo tipo de usuario.

---

## 📌 Alcance del Proyecto
Este sistema cubre las necesidades de transporte hacia y desde el Aeropuerto Jorge Chávez, contemplando a:
- **Viajeros**: gestión de reservas, historial y cancelaciones.
- **Administradores**: control de usuarios, vehículos y todas las reservas.

**Nota:** El alcance actual se limita a la versión web. No incluye aplicación móvil nativa ni pagos en línea, pero está diseñado para permitir futuras integraciones.

---

## ⚙️ Funcionalidades

### Para el Viajero (Usuario)
- Registro e inicio de sesión.
- Realización de reservas.
- Consulta y cancelación de reservas activas.
- Historial de viajes.

### Para el Administrador
- Inicio de sesión con privilegios.
- Gestión de usuarios.
- Gestión de vehículos.
- Consulta del historial de todas las reservas.

---

## 📜 Reglas del Sistema
1. Solo los usuarios registrados pueden realizar reservas.
2. Cada reserva debe incluir fecha, hora, lugar de recogida y destino.
3. Un vehículo no puede ser asignado a dos reservas en el mismo horario.
4. Cancelaciones permitidas hasta 2 horas antes del viaje.
5. El administrador controla la disponibilidad de vehículos.
6. Todas las acciones se registran en la base de datos.

---

## 🛠️ Tecnologías Utilizadas

**Frontend**
- HTML5
- CSS3
- JavaScript (vanilla)

**Backend**
- PHP
- MySQL

---

## 📂 Estructura del Proyecto

AEROPUERTO/  
│  
├── **css/**  
│  ├── formulario.css  
│  ├── styles_admin.css  
│  ├── styles_viajero.css  
│  └── styles.css  
│  
├── **imagenes/**  
│  ├── aeropuerto1.jpg  
│  ├── aeropuerto2.jpg  
│  ├── aeropuerto3.jpg  
│  ├── fondo.jpg  
│  └── icono.png  
│  
├── **js/**  
│  ├── admin_historial.js  
│  ├── admin_reserva.js  
│  ├── cerrar_sesion.js  
│  ├── login.js  
│  ├── register.js  
│  └── reservar.js  
│  
├── admin-gestion-usuarios.html  
├── admin-historial-usuario.html  
├── admin-info-aeropuerto.html  
├── admin-reserva-transporte.html  
├── admin.html  
├── historial.html  
├── index.html  
├── info.html  
├── login.html  
├── register.html  
├── reserva.html  
└── viajero.html  

---

## 🖥️ Arquitectura del Sistema

```plaintext
[ Usuario Viajero ] -----> [ Frontend HTML/CSS/JS ] -----> [ Backend PHP ]
          ↑                           ↓                           ↓
[ Usuario Admin ] --------> [ Interfaz Admin ] -------> [ Base de Datos MySQL ]
