// eslint-disable-next-line react/prop-types
const Skill = ({ name, color }) => (
  <div className="skill" style={{ backgroundColor: color }}>
    {name}
  </div>
);
export default Skill;
