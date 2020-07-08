module.exports = {
  getImage,
};

enum PhotoType {
  Random = -1,
  Person = 0,
  Cat = 1,
  Horse = 2,
  Art = 3,
  Room = 4,
}

async function getImage(type: PhotoType = PhotoType.Random): Promise<Response> {
  //give a list of usable image urls
  var urls = [
    'https://thispersondoesnotexist.com/image', //#0: people
    'https://thiscatdoesnotexist.com/', //#1: cat
    'https://thishorsedoesnotexist.com/', //#2: horse
    'https://thisartworkdoesnotexist.com/', //#3: art
    'https://thisrentaldoesnotexist.com/img-new/hero.jpg', //#4: room
  ];
  //set image url
  let im_url: string;
  if (type == PhotoType.Random) {
    var choice = Math.floor(Math.random() * 5);
    im_url = urls[choice];
  } else {
    im_url = urls[type];
  }

  let response = await fetch(im_url);
  return response;
}
