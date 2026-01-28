# Kushal Kamgar – Skilled Worker Marketplace

**Kushal Kamgar** is a full-stack platform designed to bridge the gap between local skilled professionals and customers. It uses a location-based matching engine to connect users based on Pincode and specific skill sets.

## 🚀 Key Features
* **Role-Based Dashboards:** Separate interfaces and workflows for 'Hirers' (Customers) and 'Hirers' (Service Providers).
* **Location-Based Search:** Filters professionals based on Pincode proximity.
* **State Management:** Uses Redux Toolkit for predictable data flow across complex user roles.
* **Scalable Architecture:** Built using Spring Boot Microservices for high availability.

## 🛠️ Tech Stack
* **Frontend:** React, Redux Toolkit, Tailwind CSS.
* **Backend:** Spring Boot (Microservices), Spring Data JPA.
* **Database:** MySQL.

## 💡 The Problem & Solution
**The Challenge:** Managing inconsistent data and "prop-drilling" as the project grew from a monolith to a more complex structure.
**The Resolution:** Migrated to a Microservices architecture and implemented Redux Slices to centralise logic, improving performance and data reliability.
