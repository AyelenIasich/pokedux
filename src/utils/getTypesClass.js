export const getTypeClass = (types) => {
    const typeNames = types.map((t) => t.type.name);
  
    return typeNames.includes("grass") || typeNames.includes("bug")
      ? "grass"
      : typeNames.includes("fire")
      ? "fire"
      : typeNames.includes("water")
      ? "water"
      : typeNames.includes("electric")
      ? "electric"
      : typeNames.includes("psychic")
      ? "psychic"
      : typeNames.includes("ground")
      ? "ground"
      : typeNames.includes("flying")
      ? "flying"
      : typeNames.includes("poison")
      ? "poison"
      : typeNames.includes("dragon")
      ? "dragon"
      : "";
  };
  