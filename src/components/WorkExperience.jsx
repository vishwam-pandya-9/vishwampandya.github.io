import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './WorkExperience.module.css';

export const WorkExperience = () => {
  const ref = useIntersectionObserver();

  const roles = [
    {
      id: 1,
      title: 'Senior Software Development Engineer (SDE III)',
      company: 'Audible Inc',
      location: 'Newark, NJ',
      period: '02/2026 – Present',
      description: 'Working with the Content Management Engineering Team as a CMS developer for metadata ingestion and management.',
      icon: '🎧'
    },
    {
      id: 2,
      title: 'Software Development Engineer',
      company: 'Tata Research Development and Design Centre',
      location: 'Pune, India',
      period: '06/2017 – 06/2019',
      description: 'Implemented microservices, RESTful APIs, and automation solutions using Spring Boot, Neo4j, and PostgreSQL.',
      icon: '⚙️'
    },
    {
      id: 3,
      title: 'Computer Vision Intern',
      company: 'Zebra Technologies',
      location: 'Holtsville, NY',
      period: '06/2020 – 08/2020',
      description: 'Designed bounding box algorithm for object detection using Deep Learning with 0.9 IOU score.',
      icon: '👁️'
    },
    {
      id: 4,
      title: 'Machine Learning Intern',
      company: 'Aikon Labs',
      location: 'Pune, India',
      period: '05/2016 – 07/2016',
      description: 'Built recommendation systems using Apache Spark and sentiment classification with 87.4% accuracy.',
      icon: '🤖'
    }
  ];

  return (
    <section ref={ref} id="experience" className={`${styles.experience} slide-up`}>
      <div className={styles.container}>
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {roles.map((role, index) => (
            <div key={role.id} className={`${styles.timelineItem} stagger`}>
              <div className={styles.marker}>
                <div className={styles.icon}>{role.icon}</div>
              </div>
              <div className={`${styles.content} glass`}>
                <div className={styles.header}>
                  <h3>{role.title}</h3>
                  <span className={styles.period}>{role.period}</span>
                </div>
                <p className={styles.company}>
                  {role.company} <span className={styles.location}>• {role.location}</span>
                </p>
                <p className={styles.description}>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
