import { getImage, PhotoType } from '../src';
import { expect } from 'chai';
const FileType = require('file-type');
import 'mocha';
import { writeFileSync } from 'fs';

describe('Get image function Art type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Art);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/art.jfif', result);
  });
});

describe('Get image function Cat type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Cat);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/cat.jfif', result);
  });
});

describe('Get image function Horse type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Horse);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/horse.jfif', result);
  });
});

describe('Get image function Person type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Person);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/person.jfif', result);
  });
});

describe('Get image function Random type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Random);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/random.jfif', result);
  });
});

describe('Get image function Room type', () => {
  it('should return jpeg', async () => {
    const result = await getImage(PhotoType.Room);
    expect(result).to.be.an.instanceOf(Buffer);
    const type = await FileType.fromBuffer(result);
    expect(type.mime).to.equal('image/jpeg');
    writeFileSync('test/output_jpg/room.jfif', result);
  });
});
