const Courses = () => {
  const coursesList = [
    {
      name: "O'clock - Web Developer and Accessibility",
      content:
        "Web and Mobile Web Developer Training, Level 5, Specializing in Digital Accessibility. 1500 hours, 2 months of supervised project.",
      url: "https://oclock.io/formations/developpeur-web-et-accessibilite",
    },
    {
      name: "Dyma",
      content: "Self-training in HTML, CSS, JavaScript",
      url: "https://dyma.fr/",
    },
    {
      name: " Master in Business Intelligence and Risk Analysis",
      content:
        "Information and Communication Sciences. Management, project management, digital project management. Economic intelligence, information engineering, and monitoring. Risk management and crisis management...  ",
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
