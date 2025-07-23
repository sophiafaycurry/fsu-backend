import express from "express";
const router = express.Router();

let professors = [];

// Add a new professor
router.post("/", (req,res) => {
    const {name, email, bio, image, departmentId } = req.body;
    const newProfessor = { id: Date.now(), name, email, bio, image, departmentId };
    professors.push(newProfessor);
    res.status(201).json(newProfessor);
});

// Remove an existing professor
router.delete("/:id", (req, res) => {
    professors = professors.filter(professor => professor.id !== Number(req.params.id));
    res.status(204).send();
});

// Update an existing professor
router.patch("/:id", (req, res) => {
    const professor = professors.find(professor => professor.id === Number(req.params.id));
    if (!professor) return res.status(404).send("Professor not found");
    Object.assign(professor, req.body);
    res.json(professor);
});

// Change the department of a professor
router.patch("/:id/department", (req, res) => {
    const professor = professors.find(professor => professor.id === Number(req.params.id));
    if (!professor) return res.status(404).send("Professor not found");
    professor.departmentId = req.body.departmentID;
    res.json(professor);
});

export default router;