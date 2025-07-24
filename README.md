# 🚀 Blue-Green Deployment with Docker, PM2, and NGINX

This project demonstrates **zero-downtime deployments** for a Node.js application using **Docker**, **PM2**, and **NGINX** — ideal for scenarios where continuous availability is critical.

---

## 📁 Folder Structure

<img width="404" height="465" alt="image" src="https://github.com/user-attachments/assets/190ad93a-9217-45ff-ac78-74a2f8aea7c0" />


---

## 🔧 What Does NGINX Do Here?

**NGINX** acts as a **reverse proxy**, forwarding incoming HTTP requests to the live container (blue or green). This allows:

- Seamless updates
- No downtime for end users
- Easy rollback if something breaks

---

## ⚙️ How It Works

1. Two versions of your app (`blue` and `green`) live in separate Docker containers.
2. NGINX routes traffic to the active container defined in its config.
3. Updates are made on the inactive container.
4. Once verified, NGINX is reloaded to switch traffic to the updated container.

---

## ✅ Deployment Steps

### 1. Configure `.env`

Set your ports and initial live version:

```env
BLUE_PORT=3001
GREEN_PORT=3002
LIVE=blue
```

### 2.start the Environment
```bash
docker-compose up --build -d
```
3. Visit the App
Go to: http://localhost:8080
NGINX will forward requests to the current LIVE app.
