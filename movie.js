const { By } = require('selenium-webdriver');

const addMovie = async (driver) => {
    const addMovieInput = await driver.findElement(By.xpath('//input'));
    addMovieInput.sendKeys('Finding Nemo');

    const addMovieButton = await driver.findElement(By.xpath('//button'));
    addMovieButton.click();

    await driver.sleep(1000);
    
    const movie = await driver.findElement(By.xpath('//li'));

    const isDisplayed = movie.isDisplayed();
 
    expect(isDisplayed).toBeTruthy();    
};

const strikeMovie = async (driver) => {
    const strikeMovieOff = await driver.findElement(By.xpath('//ul/li/span'));
    await driver.sleep(1000);
    strikeMovieOff.click();
};

const deleteMovie = async (driver) => {
    const deleteMovieButton = await driver.findElement(By.xpath('//ul/li/button'));
    await driver.sleep(1000);
    deleteMovieButton.click();
};


module.exports = {
    addMovie,
    strikeMovie,
    deleteMovie,
};