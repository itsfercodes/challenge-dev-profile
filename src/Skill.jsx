const Skill = ({ name, color }) => (
  <li className="skill" style={{ backgroundColor: color }}>
    {name}
  </li>
);
export default Skill;
