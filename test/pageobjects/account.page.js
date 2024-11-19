const { $, expect } = require('@wdio/globals')
const { faker } = require("@faker-js/faker");

class AccountPage {
  get radioMr() { return $('#id_gender1'); }
  get nameInput() { return $('[data-qa="name"]'); }
  get emailInput() { return $('[data-qa="email"]'); }
  get passwordInput() { return $('[data-qa="password"]'); }
  get emailInput() { return $('[data-qa="email"]'); }
  get birthDaySelect() { return $('[data-qa="days"]'); }
  get monthSelect() { return $('[data-qa="months"]'); }
  get yearsSelect() { return $('[data-qa="years"]'); }
  get newsletterCheckbox() { return $('#newsletter'); }
  get offersCheckbox() { return $('#optin'); }
  get firstNameInput() { return $('[data-qa="first_name"]'); }
  get lastNameInput() { return $('[data-qa="last_name"]'); }
  get companyInput() { return $('[data-qa="company"]'); }
  get addressInput() { return $('[data-qa="address"]'); }
  get countrySelect() { return $('[data-qa="country"]'); }
  get stateInput() { return $('[data-qa="state"]'); }
  get cityInput() { return $('[data-qa="city"]'); }
  get zipCodeInput() { return $('[data-qa="zipcode"]'); }
  get phoneNumberInput() { return $('[data-qa="mobile_number"]'); }
  get accountCreatedText() { return $('h2=Account Created!'); }
  get continueButton() { return $('[data-qa="continue-button"]'); }
  get loggedInAsText() { return $("//*[contains(text(), 'Logged in as')]"); }
  get deleteAccountButton() { return $('a[href="/delete_account"]'); }
  get accountDeletedText() { return $('h2=Account Deleted!'); }

  async fillAccountDetails() {
    await this.radioMr.click();
    await this.passwordInput.setValue('Auc@123456');
    await this.birthDaySelect.selectByAttribute('value', '22');
    await this.monthSelect.selectByVisibleText('April');
    await this.yearsSelect.selectByAttribute('value', '2000')
    await this.newsletterCheckbox.click();
    await this.offersCheckbox.click();
    await this.firstNameInput.setValue('Diego')
    await this.lastNameInput.setValue('Fernandes')
    await this.companyInput.setValue(faker.company.name())
    await this.addressInput.setValue(faker.address.street())
    await this.countrySelect.selectByIndex(3);
    await this.stateInput.setValue(faker.address.state())
    await this.cityInput.setValue(faker.address.city())
    await this.zipCodeInput.setValue(faker.address.zipCode())
    await this.phoneNumberInput.setValue(faker.phone.number())
  }

  async clickCreateAccount() {
    await $('button[data-qa="create-account"]').click();
  }

  async verifyAccountCreatedIsVisible() {
    expect(await this.accountCreatedText.isDisplayed()).toBe(true);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async verifyLoggedInAs(username) {
    await this.loggedInAsText.waitForDisplayed();
    const text = await this.loggedInAsText.getText();
    expect(text).toContain(username);
  }

  async clickDeleteAccount() {
    await this.deleteAccountButton.click();
  }

  async verifyAccountDeletedIsVisible() {
    expect(await this.accountDeletedText.isDisplayed()).toBe(true);
  }
}

module.exports = new AccountPage();
