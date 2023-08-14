import Skill from './Skill';

const SkillList = () => {
  const skills = [
    {
      skillName: 'HTML + CSS✨',
      color: '#e34c26'
    },
    {
      skillName: 'JavaScript🔮',
      color: '#f1e05a'
    },
    {
      skillName: 'React⚛️',
      color: '#409ecb'
    },
    {
      skillName: 'Java☕',
      color: '#ef9804'
    },
    {
      skillName: 'Spring Boot🍃',
      color: '#73b422'
    }
  ];
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill name={skill.skillName} color={skill.color} />
      ))}
    </div>
  );
};
export default SkillList;
