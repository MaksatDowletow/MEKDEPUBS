// Helper to register UBS question sets and split them by subject markers
(function () {
  const registry = (window.UBS_REGISTRY = window.UBS_REGISTRY || []);

  function splitIntoSubjects(questions) {
    const sets = [];
    let currentSubject = null;
    let buffer = [];

    const pushBuffer = () => {
      if (!buffer.length) return;
      const subject = currentSubject || "Toplum";
      sets.push({ subject, questions: buffer });
      buffer = [];
    };

    (questions || []).forEach((item) => {
      if (item && item.subjectMarker) {
        pushBuffer();
        currentSubject = (item.subject || "Toplum").trim();
        return;
      }
      if (item && item.prompt) {
        buffer.push({ ...item });
      }
    });

    pushBuffer();
    return sets;
  }

  window.registerUBSQuestions = function registerUBSQuestions({
    grade,
    test,
    prefix = "UBS",
    questions = [],
  }) {
    splitIntoSubjects(questions).forEach(({ subject, questions: subjectQuestions }) => {
      registry.push({
        title: `${prefix} • ${subject}`,
        grade,
        test,
        prefix,
        subject,
        questions: subjectQuestions,
      });
    });
  };
})();
