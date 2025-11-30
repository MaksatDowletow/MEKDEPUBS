// Build question bank directly from UBS registry
window.questionBankData = Array.isArray(window.UBS_REGISTRY)
  ? [...window.UBS_REGISTRY]
  : [];
