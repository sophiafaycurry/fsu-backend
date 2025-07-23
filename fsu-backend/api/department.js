import express from "express";
const router = express.Router();


let departments = []; // This is getting all the departments available in the system


// We are adding a new department
router.post("/", (req, res) => {
    const { name, description, banner } = req.body;
    const newDepartment = { id: Date.now(), name, description, banner, professors: [] };
    departments.push(newDepartment);
    res.status(201).json(newDepartment);
});

// Removing an existing department
router.delete("/:id", (req, res) => {
departments = departments.filter(department => department.id !== Number(req.params.id));
    res.status(204).send();
});

// changing info on an existing department
router.patch("/:id", (req, res) => {
    const department = departments.find(department => department.id === Number(req.params.id));
    if (!department) return res.status(404).send("Department not found");
    Object.assign(department, req.body);
    res.json(department);
});

// add a professor to a department
router.post("/:id/professors/:professorId", (req, res) => {
    const department = departments.find(department => department.id === Number(req.params.id));
    if (!department) return res.status(404).send("Department not found");
    if (!department.professors.includes(Number(req.params.professorId))) {
        department.professors.push(Number(req.params.professorId));
    }
    res.status(201).json(department);
});

// remove a professor from a department 
router.delete("id/professors/:professorId", (req, res) => {
    const department = departments.find(department => department.id === Number (req.params.id));
    if (!department) return res.status(404).send("Department not found");
    department.professors = department.professors.filter(professorId => professorId !== Number(req.params.professorId));
    res.status(204).send();
});

export default router;