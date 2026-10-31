# 🏥 Clinic API Playground

Express playground สำหรับฝึกพื้นฐาน Node.js (Day 1–3 ของแผน 30 วัน)
ก่อนสร้างโปรเจกต์จริง **Clinic Booking API** ด้วย NestJS + PostgreSQL + Prisma

## สิ่งที่ฝึกในนี้
- Modules (ESM), npm, core modules (fs, path, os)
- Event loop (`order.js`)
- HTTP server ด้วย `node:http`
- Express: routing, Router, middleware, static files

## วิธีรัน
```bash
npm install
npm run dev     # http://localhost:3000
```

| Endpoint | คำอธิบาย |
|---|---|
| `GET /patients` | รายชื่อผู้ป่วย |
| `GET /patients/:id` | ข้อมูลผู้ป่วยตาม id |

## Status
🚧 กำลังพัฒนา (เริ่ม 29 ต.ค. 2569)
