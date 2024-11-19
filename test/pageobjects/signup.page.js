class SignupPage {
  get newUserSignupText() { return $('h2=New User Signup!'); }
  get nameInput() { return $('input[data-qa="signup-name"]'); }
  get emailInput() { return $('input[data-qa="signup-email"]'); }
  get signupButton() { return $('button[data-qa="signup-button"]'); }
  get accountTitleSection() { return $('h2=Enter Account Information'); }

  async enterName(name) {
    await this.nameInput.setValue(name);
  }

  async enterEmail(email) {
    await this.emailInput.setValue(email);
  }

  async clickSignupButton() {
    await this.signupButton.click();
  }

  async verifyNewUserSignupIsVisible() {
    expect(await this.newUserSignupText.isDisplayed()).toBe(true);
  }

  async verifyEnterAccountInfoIsVisible() {
    expect(await this.accountTitleSection.isDisplayed()).toBe(true);
  }
}

module.exports = new SignupPage();
