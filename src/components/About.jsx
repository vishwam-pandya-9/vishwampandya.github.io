import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

export const About = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className={`${styles.about} slide-up`}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.text}>
          <p>
            I'm a Software Development Engineer II at Audible with 5+ years of experience
            building robust backend systems and scalable cloud applications.
          </p>
          <p>
            My core expertise is in backend development with Node.js, Python, and distributed systems.
            I'm passionate about agentic solutions and have worked extensively with Kiro (Amazon's Agentic Framework),
            building intelligent systems that leverage LLMs. I'm also a "vibe coder" with frontend—comfortable shipping
            beautiful UIs when needed, but most energized by solving complex backend challenges.
          </p>
          <p>
            I love experimenting with agents, exploring how AI can enhance backend systems, and building systems
            that scale. When not coding, I'm diving into the latest agentic frameworks or contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};
