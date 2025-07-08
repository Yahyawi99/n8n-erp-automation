# Smart Inventory & Order Automation Platform

# SmartFlowERP

An end-to-end ERP automation platform built with the MERN stack, TypeScript, Tailwind CSS, and n8n.  
It features role-based authentication and real-time workflow automation integrated with an ERP system.

## 🚀 Features

- 🔐 Role-based authentication (Admin, Staff, Customer)
- 📦 Inventory and order management
- ⚙️ Automated workflows using n8n (email, notifications, ERP sync)
- 🖥️ Responsive UI with React, Tailwind CSS, and Vite
- 📡 REST API with Node.js, Express, and MongoDB
- 🔄 ERP integration (Dolibarr)

## 📦 Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS + Vite
- **Backend:** Node.js + Express + TypeScript
- **Database:** MongoDB (with Prisma)
- **Automation:** n8n (via Webhooks and API calls)
- **Authentication:** JWT + RBAC
- **ERP Integration:** REST API

## 🔄 Example Use Case

1. A customer places an order via the frontend.
2. The backend triggers a workflow in n8n.
3. n8n sends a confirmation email, creates an invoice in **Dolibarr**, and notifies the staff.
4. Inventory is updated automatically.

## 📁 Structure

- `client/` – React frontend with Vite + Tailwind
- `server/` – Express API with TypeScript and JWT
- `n8n/` – Workflow definitions and documentation
- `erp/` – ERP integration examples

## 📖 Setup Instructions

Coming soon...

## 📜 License

MIT License
