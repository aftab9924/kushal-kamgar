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

## 💡 The Problem & Solution in Frontend

1. The "Wrong Dashboard" Redirection
The Problem: 
After registration, providers (like Jane Maria) were being sent to the "Post a Job" page, which is meant for customers.
The Resolution:
We updated the Login.jsx and Register.jsx logic to check the user.role. We implemented dynamic navigation so that if role === "PROVIDER", the app sends them to /provider/home, otherwise they go to /customer/home.

2. The "Ghost Job" (Matching Logic)
The Problem: 
Jobs weren't showing up on the worker's desk even though they were "Electricians".
The Resolution:
We discovered a data mismatch between the hardcoded mock user (Pincode 123456) and the actual job posted (Pincode 485245). We resolved this by making the "Matching Engine" in the ProviderDashboard strictly compare job.pincode === user.pincode and ensuring our test logins used matching data.

3. Image & Logo Import Errors
The Problem: 
The app kept crashing with a "White Screen" or SyntaxError when trying to show the new logo.
The Resolution: 
We fixed the file paths from ../../../ to ../../ to correctly reach the assets folder. We also corrected the import style by removing curly braces {} because images must be imported as Default Imports in Vite, not Named Imports.
4. Layout & Branding Consistency
The Problem: 
The logo appeared too small due to white space in the image file, and the footer was taking up too much vertical space.
The Resolution:
Logo: We used negative margins (-ml-6) and increased the height classes to make the branding bold.
Footer: We slimmed down the footer from py-6 to py-2 and used a professional, small font for the copyright line.
5. Routing & Protected Access
The Problem: 
The dashboard pages wouldn't render at all, leaving a blank screen even after login.
The Resolution:
We realised the MainLayout and ProtectedRoute were missing the <Outlet /> component. Adding the Outlet acted as a "placeholder" that finally allowed the dashboard content to "pop through" the layout.
