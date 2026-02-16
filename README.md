# Todo App 
ToDoApp е full-stack веб апликација за управување со задачи (To-Do листа).
Апликацијата е базирана на PERN стек (PostgreSQL, Express, React, Node.js) и е контејнеризирана со Docker, автоматизирана со GitHub Actions (CI) и деплојната на Kubernetes кластер.

Проектот е преземен како основа (PERN To-Do пример), а потоа е доработен и прилагоден со Docker, CI pipeline и Kubernetes манифести.

---

## 🚀 Функционалности

- Додавање задача  
- Преглед на сите задачи  
- Измена на задача  
- Бришење задача  
- REST API комуникација  

---

## 🏗️ Технологии

| Дел | Технологија |
|-----|-------------|
| Frontend | React (JavaScript) |
| Backend | Node.js + Express |
| База | PostgreSQL |
| Контејнеризација | Docker & Docker Compose |
| CI | GitHub Actions |
| Deployment | Kubernetes |

---

## Локално стартување
Backend:  
cd server  
node index.js  
Frontend:  
cd client  
npm start  

---
### 🐳 Со Docker Compose
docker compose up -build

---

## CI (GitHub Actions)

При секој push на main гранката:
- Се гради Docker image за backend
- Се гради Docker image за frontend
- Images автоматски се пуштаат на Docker Hub

## Kubernetes Deployment

Манифестите се наоѓаат во k8s/ папката и вклучуваат:
- Namespace
- ConfigMaps
- Secrets
- Deployments
- Services
- Ingress
- StatefulSet за базата

Деплојмент:
kubectl apply -f k8s/ -n todo-app

Апликацијата е достапна преку Ingress конфигурација.

## ✅ Проектот демонстрира
	•	Full-stack апликација
	•	Docker контејнеризација
	•	CI автоматско градење image-и
	•	Kubernetes deployment со Ingress
