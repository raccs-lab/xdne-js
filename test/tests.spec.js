import { getImage, PhotoTypes } from '../dist/index.js';
import { expect } from 'chai';
import { fileTypeFromBuffer } from 'file-type';
import 'mocha';
import { writeFileSync } from 'fs';

// describe('Get image function Art type', () => {
//   it('should return jpeg', async () => {
//     const result = await getImage(PhotoTypes.Art);
//     expect(result).to.be.an.instanceOf(Buffer);
//     const type = await fileTypeFromBuffer(result);
//     expect(type).to.have.property("mime").equals('img/jpeg');
//     // expect(type.mime).to.equal('image/jpeg');
//     writeFileSync('test/output_jpg/art.jpeg', result);
//   });
// });

// describe('Get image function Cat type', () => {
//   it('should return jpeg', async () => {
//     const result = await getImage(PhotoTypes.Cat);
//     expect(result).to.be.an.instanceOf(Buffer);
//     const type = await fileTypeFromBuffer(result);
//     expect(type).to.have.property("mime").equals('image/jpeg');
//     // expect(type.mime).to.equal('image/jpeg');
//     writeFileSync('test/output_jpg/cat.jpeg', result);
//   });
// });

// describe('Get image function Horse type', () => {
//   it('should return jpeg', async () => {
//     const result = await getImage(PhotoTypes.Horse);
//     expect(result).to.be.an.instanceOf(Buffer);
//     const type = await fileTypeFromBuffer(result);
//     expect(type).to.have.property("mime").equals('image/jpeg');
//     // expect(type.mime).to.equal('image/jpeg');
//     writeFileSync('test/output_jpg/horse.jpeg', result);
//   });
// });

describe('Get image function Person type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoTypes.Person);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await fileTypeFromBuffer(result);
    expect(type).to.have.property("mime").equals('image/jpeg');
    // expect(type.mime).to.equal('image/jpeg');
    // writeFileSync('test/output/person.jpeg', result);
  });
});

describe('Get image function Random type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoTypes.Random);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await fileTypeFromBuffer(result);
    expect(type).to.have.property("mime").equals('image/jpeg');
    // expect(type.mime).to.equal('image/jpeg');
    // writeFileSync('test/output/random.jpeg', result);
  });
});

describe('Get image function Room type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoTypes.Room);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await fileTypeFromBuffer(result);
    expect(type).to.have.property("mime").equals('image/jpeg');
    // expect(type.mime).to.equal('image/jpeg');
    // writeFileSync('test/output/room.jpeg', result);
  });
});
