const { Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { 
    addMovie, 
    deleteMovie, 
    strikeMovie 
} = require("./movie");

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.sleep(1000);
  await driver.quit();
});

it("should add a movie", async () => {
  await addMovie(driver);
});

it("should strike through a movie", async () => {
  await strikeMovie(driver);
});

it('should remove a movie', async () => {
    await deleteMovie(driver);
});
