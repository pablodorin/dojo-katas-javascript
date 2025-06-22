function whoLikesIt(names) {
  const count = names.length;
  let message = "";

  switch (count) {
    case 0:
      message = "no one likes this";
      break;
    case 1:
      message = `${names[0]} likes this`;
      break;
    case 2:
      message = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      message = `${names[0]}, ${names[1]} and ${count - 2} others like this`;
      break;
  }

  return message;
}

module.exports = whoLikesIt;
