class HomePage {
  get signupLoginButton() { return $('a[href="/login"]'); }
  get homePageLogo() { return $('.logo'); }

  async navigateToUrl(path) {
    await browser.url(`http://automationexercise.com/${path}`);
  }

  async isHomePageVisible() {
    return await this.homePageLogo.isDisplayed();
  }

  async verifyHomePageIsVisible() {
    expect(await browser.getTitle()).toBe('Automation Exercise');
  }

  async clickSignupLogin() {
    await this.signupLoginButton.click();
  }
}

module.exports = new HomePage();
