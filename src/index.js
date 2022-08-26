const { chai, mocha } = window;
const { assert, expect } = chai;
export const total_testcases = 6;

// const boxes = document.querySelectorAll(".x");
const grid = document.getElementsByClassName("grid-container");
console.log("------");
// console.log(grid);

afterEach((done) => {
  done();
});

it("there should be full grid visible on the page", async () => {
  assert.exists(grid);
});

it("each value takes single column", async () => {
  assert.exists(grid);
});

it("make a grid of 3*3", async () => {
  console.log(grid);
});

it("Inner div have padding of 10px", function () {
  expect(getComputedStyle(grid[0])).to.include({
    padding: "10px"
  });
});

it("Inner div have margin of 20px", function () {
  expect(getComputedStyle(grid[0])).to.include({
    margin: "20px"
  });
});

it("Should contain border of 30px solid red", function () {
  // console.log(getComputedStyle(grid[0]))
  expect(getComputedStyle(grid[0])).to.include({
    border: "30px solid rgb(255, 0, 0)"
  });
});

mocha.run();
