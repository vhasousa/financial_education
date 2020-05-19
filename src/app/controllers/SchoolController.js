import School from '../models/School';

class SchoolController {
  async store(req, res) {
    // const schema = Yup.object().shape({
    //   number: Yup.number().integer().required().moreThan(0).lessThan(10),
    //   level: Yup.string()
    //     .required()
    //     .when('number', (number, field) => {
    //       return number > 4
    //         ? field.oneOf(['Fundamental'])
    //         : field.oneOf(['Fundamental', 'Médio']);
    //     }),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(401).json({ message: 'Validations fail' });
    // }

    const { grades, ...data } = req.body;
    const school = await School.create(data);

    if (grades && grades.length > 0) {
      school.setGrades(grades);
    }

    return res.json(school);
  }
}

export default new SchoolController();
