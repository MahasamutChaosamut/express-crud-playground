import * as Patient from "../models/patient.model.js";

export const getAllPatientsController = (req, res) => {
  res.status(200);
  res.json(Patient.findAll());
};

export const getByIdPatientController = (req, res) => {
  res.status(200);
  const id = Number.parseInt(req.params.id);
  const patient = Patient.findById(id);
  switch (patient) {
    case undefined:
      res.status(404);
      res.json({ message: `Patient ID: ${id} not found` });
      break;
    default:
      res.json(patient);
  }
};

export const createPatientController = (req, res) => {
  const newPatient = req.body ?? {};
  if (!newPatient.firstName || !newPatient.lastName) {
    res.status(400);
    res.json({ message: "missing required fields" });
    return;
  }
  const createdPatient = Patient.create(newPatient);
  res.status(201);
  res.json(createdPatient);
};

export const updatePatientController = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const updatedPatient = Patient.update(id, req.body ?? {});
  if (!updatedPatient) {
    res.status(404);
    res.json({ message: `Patient not found` });
  } else {
    res.status(200);
    res.json(updatedPatient);
  }
};

export const deletePatientController = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const deletedPatient = Patient.deletePatient(id);
  if (!deletedPatient) {
    res.status(404);
    res.json({ message: `Patient not found` });
  } else {
    res.status(200);
    res.json(deletedPatient);
  }
};
