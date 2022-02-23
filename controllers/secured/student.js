import Students from "../../models/student.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Students.findAll({
            attributes: ['id', 'name', 'score']
        });
        res.json(students);
    } catch (error) {
        res.error(error);
    }
}

export const updateScore = async (req, res) => {
    try {
        const sId = req.params.id;

        await Students.update({ score: req.body.score }, {
            where: {
                id: sId
            }
        });

        const students = await Students.findAll({
            attributes: ['id', 'name', 'score']
        });

        res.json({
            success: true,
            students
        });
    } catch (error) {
        res.error(error);
    }
}

export const addStudent = async (req, res) => {
    const { name, score } = req.body;
    try {
        await Students.create({
            name,
            score
        });
        res.json({
            success: true
        });
    } catch (error) {
        res.error(error);
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const sId = req.params.id;

        await Students.destroy({
            where: {
                id: sId
            }
        });
        res.json({
            success: true
        });
    } catch (error) {
        res.error(error);
    }
}