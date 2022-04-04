# Part One: Medical Center

# Design the schema for a medical center.

# A medical center employs several doctors
# A doctors can see many patients
# A patient can be seen by many doctors
# During a visit, a patient may be diagnosed 
# to have one or more diseases.

Doctor
-
id PK int
name string

Patient
-
id PK int
name string
patient_information string

Diagnosis
-
id PK int
name string
disease_id int FK >- Disease.id

Disease
-
id PK int
name string
disease_information string

Appointment
-
id PK int
doctor_id int FK >- Doctor.id
patient_id int FK >- Patient.id
diagnosis_id int FK >- Diagnosis.id


--------------------------------------------------


--------------------------------------------------