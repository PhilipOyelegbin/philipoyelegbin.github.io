import { Testimonials } from "./_components/Testimonials";
import Projects from "./_components/Projects";
import Logout from "./_components/Logout";

const Dashboard = () => {
  return (
    <article>
      <Testimonials />
      <Projects />
      <Logout />
    </article>
  );
};

export default Dashboard;
