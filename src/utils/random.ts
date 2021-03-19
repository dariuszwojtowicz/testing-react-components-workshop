export default {
  getRandomListElement: (...options) => {
    const optionsCount = options.length;
    const randomIndex = Math.floor(Math.random() * optionsCount);
    return options[randomIndex];
  }
}
