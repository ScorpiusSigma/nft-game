export const CONTRACT_ADDRESS = "0x1085B6baB8904F88255C8F1C0Ba31BadfD819f59";

/*
 * Add this method and make sure to export it on the bottom!
 */
export const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };