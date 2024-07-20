const Courses = ({ french }) => {
  const coursesList = [
    {
      en: {
        name: "O'clock - Web Developer and Accessibility",
        content:
          "Web and Mobile Web Developer Training, Level 5, Specializing in Digital Accessibility. 1500 hours, 2 months of supervised project.",
      },
      fr: {
        name: "O'clock - Développeur Web et accessibilité",
        content:
          "Formation Web et Web Mobile, niveau 5, Spécialisation dans l'accessibilité numérique. 1500 heures, 2 mois de projet supervisé.",
      },
      url: "https://oclock.io/formations/developpeur-web-et-accessibilite",
    },
    {
      en: {
        name: "Dyma",
        content: "Self-training in HTML, CSS, JavaScript",
      },
      fr: {
        name: "Dyma",
        content: "Autoformation en HTML, CSS, JavaScript",
      },
      url: "https://dyma.fr/",
    },
    {
      en: {
        name: " Master in Business Intelligence and Risk Analysis",
        content:
          "Information and Communication Sciences. Management, project management, digital project management. Business intelligence, information engineering, and monitoring. Risk management and crisis management...  ",
      },
      fr: {
        name: " Master en intelligence économique et analyse des risques",
        content:
          "Sciences de l’information de la communication. Gestion, management, management de projet numérique. Intelligence économique, ingénierie de l'information et veille. Management des risques et gestion de crise. Sciences de l’information de la communication...   ",
      },
      url: "https://formations.univ-gustave-eiffel.fr/master/detail/intelligence-strategique-analyse-des-risques-et-territoires-isart-314",
    },
  ];

  return (
    <section className="flex flex-col  justify-center items-center text-center mt-4 pt-8">
      {french ? (
        <h2 className="text-2xl font-bold">Formations</h2>
      ) : (
        <h2 className="text-2xl font-bold">Courses</h2>
      )}
      <ul className="m-2 text-sm">
        {coursesList.map((course, index) => (
          <a
            key={index}
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="max-w-5xl my-2 p-2 border-x-2 border-y-8 border-light-border dark:border-dark-border  hover:contrast-0">
              <h3 className="text-lg mb-2 inline-flex items-center gap-2">
                {french ? (
                  <strong>{course.fr.name}</strong>
                ) : (
                  <strong>{course.en.name}</strong>
                )}
              </h3>
              <p>
                {french ? (
                  <em>{course.fr.content}</em>
                ) : (
                  <em>{course.en.content}</em>
                )}
              </p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};
export default Courses;
