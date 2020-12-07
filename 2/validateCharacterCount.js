module.exports = (policyAndPassword) => {
  const pieces = policyAndPassword.split(" ");
  const range = pieces[0].split("-");
  const character = pieces[1].split("")[0];
  const password = pieces[2];
  const passwordPieces = password.split("");

  const charCount = passwordPieces.filter(
    (passwordPiece) => passwordPiece === character
  ).length;

  return charCount >= range[0] && charCount <= range[1];
};
