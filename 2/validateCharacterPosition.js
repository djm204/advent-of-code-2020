module.exports = (policyAndPassword) => {
  const pieces = policyAndPassword.split(" ");
  const characterPositions = pieces[0].split("-");
  const character = pieces[1].split("")[0];
  const password = pieces[2];
  const passwordPieces = password.split("");

  return (
    (passwordPieces[characterPositions[0] - 1] === character &&
      passwordPieces[characterPositions[1] - 1] !== character) ||
    (passwordPieces[characterPositions[1] - 1] === character &&
      passwordPieces[characterPositions[0] - 1] !== character)
  );
};
