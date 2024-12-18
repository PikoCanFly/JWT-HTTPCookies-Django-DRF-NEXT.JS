﻿A secure, token-based authentication system built using **Django** for the backend and **Next.js** for the frontend. This project implements secure user login, registration, logout, and token refresh functionalities with **HTTP-only cookies** for enhanced security.

---

## 🚀 **Features**

### **Backend (Django + DRF)**  
- ✅ **Custom User Model**: Authenticate users using their **email** instead of a username.  
- ✅ **User APIs**: Endpoints for **registration**, **login**, **logout**, **token refresh**, and fetching **user information**.  
- ✅ **JWT Authentication**: Implemented using **Simple JWT** with access and refresh tokens.  
- ✅ **Token Blacklisting**: Secure **logout** by blacklisting refresh tokens.  
- ✅ **Cookie-Based Authentication**: Tokens stored in **HTTP-only cookies** to prevent XSS vulnerabilities.  
- ✅ **Token Rotation**: Seamless **access token refresh** using refresh tokens.

### **Frontend (Next.js + Axios)**  
- ✅ **User Registration**: Register new users with email, username, and password.  
- ✅ **User Login**: Authenticate users and store tokens securely.  
- ✅ **Automatic Token Refresh**: Refresh access tokens seamlessly.  
- ✅ **Fetch User Info**: Retrieve and display authenticated user details.  
- ✅ **Secure Logout**: Clear cookies and invalidate user sessions.  

---

## 🎥 **Video Tutorial**

Watch the full step-by-step tutorial on **YouTube**:  
[![Video](https://img.youtube.com/vi/TS1v_-ppICk/0.jpg)](https://youtu.be/TS1v_-ppICk)

---

## 🛠️ **Technologies Used**

### **Backend**
- Django  
- Django REST Framework  
- Simple JWT  
- Python  

### **Frontend**
- Next.js  
- React.js  
- Axios  

### **Other Tools**
- CORS Headers  
- HTTP-only Cookies  

## Support

If you found this project helpful, consider becoming a patron on my Patreon:

[![Support me on Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-orange.svg)](https://www.patreon.com/PikoCanFly)

Your contributions will help me continue creating helpful content. Thank you for your support!

## Contributing

This project was made to help spread knowledge. If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request.


