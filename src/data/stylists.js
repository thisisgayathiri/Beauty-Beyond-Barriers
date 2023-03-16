import { faker } from "@faker-js/faker";

let stylists = [];

const ratings = ["4.2 (190+)", "3.8 (230+)", "4.7 (10+)", "4.0 (134+)"];
const availability = [true, false];

function createRandomUser(i) {
  return {
    _id: faker.datatype.uuid(),
    avatar: i + ".jpg",
    email: faker.internet.email(),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    phoneNumber: "92332234233",
    rating: ratings[_.random(ratings.length - 1)],
    available: availability[_.random(availability.length - 1)],
  };
}

for (let i = 1; i <= 5; i++) {
  stylists.push(createRandomUser(i));
}

export default stylists;
