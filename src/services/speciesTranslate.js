const speciesTranslate = (species) => {
  if (species === 'human') {
    return (species = 'Humano');
  } else if (species === 'half-giant') {
    return (species = 'Medio gigante');
  } else if (species === 'werewolf') {
    return (species = 'Hombre lobo');
  } else if (species === 'ghost') {
    return (species = 'Fantasma');
  } else {
    return (species = 'No definida');
  }
};

export default speciesTranslate;
