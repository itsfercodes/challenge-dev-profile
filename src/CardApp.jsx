import Avatar from './Avatar';
import Intro from './Intro';
import SkillList from './SkillList';

const CardApp = () => (
  <div className="card">
    <Avatar />
    <div className="data">
      <Intro />
      <SkillList />
    </div>
  </div>
);
export default CardApp;
