const Courses = () => {
  const coursesList = [
    {
      name: "O'clock - Développeur Web et accessibilité",
      content:
        "Formation Développeur Web et Web Mobile Niveau 5 spécialisation en accessibilité numérique. 1500 heures, 2 mois de projet tutoré",
      url: "https://oclock.io/formations/developpeur-web-et-accessibilite",
    },
    {
      name: "Dyma",
      content: "Autoformation HTML, CSS, Javascript",
      url: "https://dyma.fr/",
    },
    {
      name: "Master Intelligence économique et analyse des risques",
      content:
        "Sciences de l’information de la communication. Gestion, management, management de projet numérique. Intelligence économique, ingénierie de l'information et veille. Management des risques et gestion de crise. Sciences de l’information de la communication...  ",
      url: "https://formations.univ-gustave-eiffel.fr/master/detail/intelligence-strategique-analyse-des-risques-et-territoires-isart-314",
    },
  ];

  return (
    <section className="flex flex-col  justify-center items-center text-center mt-4 pt-8">
      <h2 className="text-2xl font-bold">Courses</h2>

      <ul className="m-2 text-sm">
        {coursesList.map((course, index) => (
          <li
            key={index}
            className="max-w-5xl my-2 p-2 border-x-2 border-y-8 border-light-border dark:border-dark-border  hover:contrast-0"
          >
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg mb-2 inline-flex items-center gap-2">
                <strong>{course.name}</strong>
              </h3>
              <p>
                <em>{course.content}</em>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Courses;
