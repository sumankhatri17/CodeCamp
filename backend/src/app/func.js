// Desc: This file contains the functions that are called by the routes
// const Admin =  async (req, res) => {
// };
const Evaluator = require("../../Evaluator")
const Evaluate = async (req, res) => {
    const data = req.body;
    const score = data.map(item => Evaluate(item.question, item.answer));
    const total_score = score.reduce((acc, current) => acc + current, 0)/ score.length;
    res.status(200).json({'score': total_score});
};

export {Evaluate};

// export {Student, Teacher, Admin};

