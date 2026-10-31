import seed from "../data/patient.json" with { type: "json" };

// copy ออกมาเป็น array ใน memory ข้อมูลจะกลับเป็นค่าเริ่มต้นทุกครั้งที่ restart
let patients = [...seed];
let nextId = patients.length + 1;

export const findAll = () => patients;

export const findById = (id) => {
  return patients.find((patient) => patient.id === id);
};
export const create = (data) => {
  const patient = { id: nextId++, ...data };
  patients.push(patient);
  return patient;
};
export const update = (id, data) => {
  const patient = findById(id);
  if (!patient) {
    return undefined;
  }
  Object.assign(patient, data);
  return patient;
};
export const deletePatient = (id) => {
  const index = patients.findIndex((patient) => patient.id === id);
  if (index === -1) {
    return undefined;
  }
  const deletedPatient = patients[index];
  patients.splice(index, 1);
  return deletedPatient;
};
