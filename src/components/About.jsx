import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './About.module.css';

export const About = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="about" className={`${styles.about} slide-up`}>
      <div className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a Senior Software Development Engineer (SDE III) at Audible with 5+ years of experience
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

          <div className={`${styles.skills} glass`}>
            <h3>Skills & Technologies</h3>
            <div className={styles.skillsList}>
              <div className={styles.skillGroup}>
                <h4>Backend</h4>
                <div className={styles.tags}>
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>AWS</span>
                  <span>Microservices</span>
                </div>
              </div>
              <div className={styles.skillGroup}>
                <h4>Agents & AI</h4>
                <div className={styles.tags}>
                  <span>Kiro</span>
                  <span>LLMs</span>
                  <span>Agentic Frameworks</span>
                  <span>Prompt Engineering</span>
                  <span>GenAI APIs</span>
                </div>
              </div>
              <div className={styles.skillGroup}>
                <h4>Frontend</h4>
                <div className={styles.tags}>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Vue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
