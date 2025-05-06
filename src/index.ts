export const PhotoTypes = Object.freeze({
  Random: -1,
  Person: 0,
  // Cat: 1,
  // Horse: 2,
  // Art: 3,
  Room: 1,
});

export async function getImage(
  type: number = PhotoTypes.Random
): Promise<Buffer> {
  //give a list of usable image urls
  var urls = [
    'https://thispersondoesnotexist.com/', //#0: people
    // 'https://thiscatdoesnotexist.com/', //#1: cat
    // 'https://thishorsedoesnotexist.com/', //#2: horse
    // 'https://thisartworkdoesnotexist.com/', //#3: art
    'https://thisrentaldoesnotexist.com/img-new/hero.jpg', //#4: room
  ];
  //set image url
  let im_url: string | undefined;
  if (type === PhotoTypes.Random) {
    var choice = Math.floor(Math.random() * 2);
    im_url = urls[choice];
  } else {
    im_url = urls[type];
  }

  try {
    if (!im_url) {
      throw new Error('Invalid image type');
    }
    const response = await fetch(im_url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const stream = await fetch(im_url);
    const buffer = Buffer.from(await stream.arrayBuffer());
    return buffer;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}
