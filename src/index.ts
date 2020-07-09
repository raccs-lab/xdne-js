import 'bent';
import bent = require('bent');

export enum PhotoType {
  Random = -1,
  Person = 0,
  Cat = 1,
  Horse = 2,
  Art = 3,
  Room = 4,
}

export async function getImage(
  type: PhotoType = PhotoType.Random
): Promise<ArrayBufferLike> {
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

  const stream = bent('buffer');
  const buffer = await stream(im_url);
  return buffer;
}
