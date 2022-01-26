const speciesTranslate = (species) => {
  if (species === 'human') {
    return (species = 'Humano');
  } else if (species === 'half-giant') {
    return (species = 'Medio gigante');
  } else if (species === 'warewolf') {
    return (species = 'Hombre lobo');
  } else if (species === 'ghost') {
    return (species = 'Fantasma');
  } else if (species === 'cat') {
    return (species = 'Gato');
  } else if (species === 'Goblin') {
    return (species = 'Duende');
  } else if (species === 'Owl') {
    return (species = 'Lechuza');
  } else {
    return (species = 'No definida');
  }
};

export default speciesTranslate;
