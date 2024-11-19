const { faker } = require('@faker-js/faker')
const HomePage = require('../pageobjects/common/home.page');
const SignupPage = require('../pageobjects/signup.page');
const AccountPage = require('../pageobjects/account.page');

describe('Test Case 1: Register User', () => {

  it('should register a new user successfully', async () => {

    await HomePage.navigateToUrl();
    await HomePage.verifyHomePageIsVisible();
    await HomePage.clickSignupLogin();

    await SignupPage.verifyNewUserSignupIsVisible();
    await SignupPage.enterName('Diego Fernandes');
    await SignupPage.enterEmail(faker.internet.email());
    await SignupPage.clickSignupButton();
    await SignupPage.verifyEnterAccountInfoIsVisible();

    await AccountPage.fillAccountDetails();
    await AccountPage.clickCreateAccount();
    await AccountPage.verifyAccountCreatedIsVisible();
    await AccountPage.clickContinueButton();
    await AccountPage.verifyLoggedInAs('Diego Fernandes');
    await AccountPage.clickDeleteAccount();
    await AccountPage.verifyAccountDeletedIsVisible();
    await AccountPage.clickContinueButton();
  });
});
