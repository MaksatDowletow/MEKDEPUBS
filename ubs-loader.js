// Helper to register UBS question sets and split them by subject markers
(function () {
  const registry = (window.UBS_REGISTRY = window.UBS_REGISTRY || []);

  function normalizeQuestions({ subject, questions }) {
    let activeSubject = subject?.trim() || null;
    const collected = [];

    (questions || []).forEach((item) => {
      if (item && item.subjectMarker) {
        if (!activeSubject && item.subject) {
          activeSubject = item.subject.trim();
        }
        return;
      }

      if (item && item.prompt) {
        collected.push({ ...item });
      }
    });

    return {
      subject: activeSubject || "Toplum",
      questions: collected,
    };
  }

  window.registerUBSQuestions = function registerUBSQuestions({
    grade,
    test,
    prefix = "UBS",
    subject,
    questions = [],
  }) {
    const normalized = normalizeQuestions({ subject, questions });

    registry.push({
      title: `${prefix} • ${normalized.subject}`,
      grade,
      test,
      prefix,
      subject: normalized.subject,
      questions: normalized.questions,
    });
  };
})();
