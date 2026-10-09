export function validate(data) {
  if (!data.title || !Array.isArray(data.phases) || data.phases.length !== 3) throw new Error('A title and three phases are required.');
  const ids = new Set();
  for (const phase of data.phases) {
    for (const record of [phase, ...phase.sections]) {
      if (!/^[a-z0-9/-]+$/.test(record.id) || ids.has(record.id)) throw new Error(`Invalid or duplicate ID: ${record.id}`);
      ids.add(record.id);
    }
    if (phase.sections.length !== 11) throw new Error('Each phase requires eleven explanation sections.');
    for (const section of phase.sections) {
      if (!section.id.startsWith(phase.id + '/') || !section.title || !section.button || !section.summary || !section.explanation || !section.status || !Array.isArray(section.questions)) throw new Error(`Incomplete section: ${section.id}`);
    }
  }
  return ids;
}
