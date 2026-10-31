# 🏥 Clinic API Playground

Express playground สำหรับฝึกพื้นฐาน Node.js (Day 1–3 ของแผน 30 วัน)
ก่อนสร้างโปรเจกต์จริง **Clinic Booking API** ด้วย NestJS + PostgreSQL + Prisma

## สิ่งที่ฝึกในนี้
- Modules (ESM), npm, core modules (fs, path, os)
- Event loop (`order.js`)
- HTTP server ด้วย `node:http`
- Express: routing, Router, middleware, 404 handler, error handler
- CRUD ที่เก็บข้อมูลใน memory แยกเป็น MVC

## โครงสร้าง
```
app.js                              ตั้งค่า express, 404 handler, error handler
routes/patients.js                  จับคู่ path กับ controller
controllers/patient.controller.js   รับ req, ตรวจ input, ตอบ status code
models/patient.model.js             จัดการข้อมูลใน memory
data/patient.json                   ข้อมูลผู้ป่วยตั้งต้น (ข้อมูลปลอม)
```

## วิธีรัน
```bash
npm install
npm run dev     # http://localhost:3000
```

| Endpoint | คำอธิบาย | Status |
|---|---|---|
| `GET /patients` | รายชื่อผู้ป่วยทั้งหมด | 200 |
| `GET /patients/:id` | ข้อมูลผู้ป่วยตาม id | 200 / 404 |
| `POST /patients` | เพิ่มผู้ป่วย (ต้องมี `firstName`, `lastName`) | 201 / 400 |
| `PATCH /patients/:id` | แก้ไขบาง field | 200 / 404 |
| `DELETE /patients/:id` | ลบผู้ป่วย คืนข้อมูลที่ถูกลบ | 200 / 404 |

ข้อมูลอยู่ใน memory เมื่อ restart server จะกลับเป็นค่าตั้งต้น

## Status
🚧 กำลังพัฒนา (เริ่ม 29 ต.ค. 2569)
