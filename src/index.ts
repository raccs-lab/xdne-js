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
): Promise<Buffer> {
  //give a list of usable image urls
  var urls = [
    'https://thisrentaldoesnotexist.com/img-new/hero.jpg', //#0: room 512x512
    'https://thisrentaldoesnotexist.com/img-new/img1.jpg', //#1: room 256x256
    'https://thisrentaldoesnotexist.com/img-new/img2.jpg', //#2: room 256x256
    'https://thisrentaldoesnotexist.com/img-new/img3.jpg', //#3: room 256x256
    'https://thisrentaldoesnotexist.com/img-new/img4.jpg', //#4: room 256x256
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
  const buffer = Buffer.from(await stream(im_url));
  return buffer;
}
