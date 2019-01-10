const createdAndUpdatedAt = {
  createdAt: new Date(),
  updatedAt: new Date()
}

const baconIpsum = `
Bacon ipsum dolor amet tail landjaeger consequat, turkey chicken chuck
drumstick cupim doner pastrami. Ribeye chicken cupim spare ribs brisket
nostrud enim irure laboris sunt short loin salami. Drumstick exercitation
elit non shankle nostrud est reprehenderit deserunt culpa rump meatball.
Nostrud pig t-bone, incididunt et pancetta consectetur turkey fugiat.
`

module.exports = [
  {
    commonName: 'Bismarck Palm',
    shortDescription: 'Palm trees are kind of like oak trees, but for rich people.',
    longDescription: baconIpsum,
    imageUrl: 'https://en.wikipedia.org/wiki/Bismarckia#/media/File:B.nobilis.JPG',
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Dry Cactus',
    shortDescription: 'Most cacti are dry; this one is exceptionally dry though.',
    longDescription: baconIpsum,
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Panda Plant',
    shortDescription: 'This plant is called the panda plant, but it doesn\'t quite resemble a panda now does it?',
    longDescription: baconIpsum,
    imageUrl: 'https://en.wikipedia.org/wiki/Kalanchoe_tomentosa#/media/File:Kalanchoe_tomentosa_01.jpg',
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Chinese Money Plant',
    shortDescription: 'They could have just called it the Yuan plant, but everybody was afraid of a lawsuit.',
    longDescription: baconIpsum,
    imageUrl: 'https://en.wikipedia.org/wiki/Pilea_peperomioides#/media/File:Pilea_peperomioides_Chinese_money_plant.jpg',
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Zig Zag Cactus',
    shortDescription: 'Objectively, a bit more wet than the dry cactus. Still very dry.',
    longDescription: baconIpsum,
    imageUrl: 'https://en.wikipedia.org/wiki/Selenicereus_anthonyanus#/media/File:Selenicereus_anthonyanus.jpg',
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Bird\'s Nest Fern',
    shortDescription: 'The classic choice for your interior office design.',
    longDescription: baconIpsum,
    imageUrl: 'https://example.com/plant.jpg',
    ...createdAndUpdatedAt
  },
  {
    commonName: 'Bird\'s Nest Fern',
    shortDescription: 'The classic choice for your interior office design.',
    longDescription: baconIpsum,
    imageUrl: 'https://en.wikipedia.org/wiki/Asplenium_nidus#/media/File:Asplenium_nidus_seedling.jpg',
    ...createdAndUpdatedAt
  }
]
