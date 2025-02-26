function guess(num, func1, func2, func3) {
  const random = Math.floor(Math.random() * 10) + 1;
  console.log(random);

  if (num < random) {
    func1();
  } else if (num > random) {
    func2();
  }
  func3();
}
