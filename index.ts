const key = `key`;
const a = ({ [key]: renamed }) => renamed;
const b = ({ [`key`]: renamed }) => renamed;
