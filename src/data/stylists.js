import { faker } from "@faker-js/faker";

let stylists = [];

function createRandomUser(i) {
  return {
    _id: faker.datatype.uuid(),
    avatar: i + '.jpg',
    email: faker.internet.email(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
  };
}

for (let i = 1; i <= 5; i++) {
  stylists.push(createRandomUser(i));
}

export default stylists;
