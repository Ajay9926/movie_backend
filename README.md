---

## 🎬 Movies Backend (Node.js + Express + TypeScript + Prisma + MySQL on Railway)

This is a **live backend** project built by **Ajay Raj Vrala** using
**Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **MySQL (hosted on Railway)**.

---

### 🚀 Live Backend

🔗 **Live URL:** [https://movie-backend.up.railway.app/](https://movie-backend.up.railway.app/)

---

### ⚙️ What I Have Done

✅ Built complete **Node.js + Express + TypeScript backend**
✅ Integrated **Prisma ORM** with **MySQL (Railway database)**
✅ Implemented **Authentication (Signup & Login)** using **JWT**
✅ Created full **CRUD APIs for Movies**
✅ Added **File Upload**, **Validation**, and **Error Handling** middlewares
✅ Deployed backend live successfully on **Railway**

---

### 🗄️ Database

* **MySQL (Hosted on Railway)**
* Managed using **Prisma ORM**

---

### 📡 API Endpoints

#### **Auth Routes**

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Login existing user |

#### **Movie Routes**

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/api/movies`     | Get all movies |
| POST   | `/api/movies`     | Add new movie  |
| PUT    | `/api/movies/:id` | Update a movie |
| DELETE | `/api/movies/:id` | Delete a movie |

---

## ⚙️ Setup & Run Locally

Follow these steps to run the backend locally 👇

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ajayrajvrala/movies-backend.git
```

### 2️⃣ Navigate to project folder

```bash
cd movies-backend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Setup environment variables

Create a `.env` file in the project root and add 👇

```env
DATABASE_URL="mysql://username:password@localhost:3306/databasename"
JWT_SECRET="your_secret_key"
PORT=8080
```

### 5️⃣ Run Prisma migrations

```bash
npx prisma migrate dev
```

### 6️⃣ Start development server

```bash
npm run dev
```

### 7️⃣ Open in browser

Go to 👉 [http://localhost:8080](http://localhost:8080)

---

### 🧑‍💻 Author

**Ajay Raj Varala**

---