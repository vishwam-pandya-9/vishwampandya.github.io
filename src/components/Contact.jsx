import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

export const Contact = () => {
  const ref = useIntersectionObserver();

  return (
    <section ref={ref} id="contact" className={`${styles.contact} slide-up`}>
      <div className={styles.container}>
        <h2>Let's Connect</h2>
        <p className={styles.subtitle}>
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className={`${styles.card} glass`}>
          <div className={styles.content}>
            <p>
              Whether you want to collaborate on backend systems, discuss agentic solutions,
              or just grab a virtual coffee, I'd love to hear from you!
            </p>

            <div className={styles.links}>
              <a
                href="mailto:vishwamjp@gmail.com"
                className={styles.link}
              >
                📧 Email
              </a>
              <a
                href="https://github.com/vishwam-pandya-9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                💻 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishwampandya/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
