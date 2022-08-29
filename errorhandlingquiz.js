try {
  myfunc = (x, y) => {
    z = x * x + 5 * y;
    console.log(z);
  };
} catch (e) {
  console.log("some error happened");
}
myfunc(2, 3);
