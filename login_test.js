var faker = require("faker");
Feature("login");

Scenario("test something", ({ I }) => {
  var Password = faker.internet.password();
  var FirstName = faker.name.firstName();
  var LastName = faker.name.lastName();
  var State = faker.address.state();
  var City = faker.address.city();
  var ZipCode = faker.address.zipCode();
  var PhoneNumber = faker.phone.phoneNumber();
  var Email = faker.internet.email();

  I.amOnPage("/");

  I.click(
    "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a"
  );

  I.fillField(
    "#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)",
    FirstName
  );

  I.fillField(
    "#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)",
    Email
  );
  I.click("#form > div > div > div:nth-child(3) > div > form > button");

  I.click("#id_gender1");

  I.scrollTo("#password");

  I.fillField("#password", Password);

  I.selectOption("#days", "23");

  I.selectOption("#months", "December");

  I.selectOption("#years", "1985");

  I.waitForElement("#first_name", 50);

  I.fillField("#first_name", FirstName);

  I.fillField("#last_name", LastName);

  I.selectOption("#country", "United States");

  I.fillField("#state", State);

  I.fillField("#city", City);

  I.fillField("#zipcode", ZipCode);

  I.fillField("#mobile_number", PhoneNumber);

  I.click("#form > div > div > div > div.login-form > form > button");
});
