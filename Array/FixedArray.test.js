import {expect} from 'chai';
import { FixedArray } from './FixedArray.js';


describe("FixedArray", () => {
    let numberArray;
    let objectArray;
    let testNumberArray = [];
    let testObjectArray = [];
    const TEST_LENGTH = 5;

    before(() => {
        numberArray = new FixedArray(TEST_LENGTH);
        objectArray = new FixedArray(TEST_LENGTH);

        for(let i = 1; i <= TEST_LENGTH; i++) {
            numberArray.push(i);
            testNumberArray.push(i);
            const testObj = {
                id: i,
                text: `${i}번 입니다`
            }
            objectArray.push(testObj);
            testObjectArray.push(testObj);
        }
    });

    it('getLength', () => {
        expect(numberArray.getLength()).to.equal(testNumberArray.length);
        expect(objectArray.getLength()).to.equal(testObjectArray.length);
    })

    it('toString', () => {
        expect(numberArray.stringify()).to.equal(JSON.stringify(testNumberArray));
        expect(objectArray.stringify()).to.equal(JSON.stringify(testObjectArray));
    })

    it('pop', () => {
        expect(numberArray.pop()).to.equal(testNumberArray.pop());
        expect(objectArray.pop()).to.equal(testObjectArray.pop());

        // pop 이후 길이 체크
        expect(numberArray.getLength()).to.equal(testNumberArray.length);
        expect(objectArray.getLength()).to.equal(testObjectArray.length);

        // pop 이후 배열 상태 체크
        expect(numberArray.stringify()).to.equal(JSON.stringify(testNumberArray));
        expect(objectArray.stringify()).to.equal(JSON.stringify(testObjectArray));
    })

    it('indexOf', () => {
        expect(numberArray.indexOf(2)).to.equal(testNumberArray.indexOf(2));
    })

    it('find', () => {
        expect(numberArray.find(f => f === 3)).to.equal(testNumberArray.find(f => f === 3));
        expect(objectArray.find(f => f.id === 3)).to.equal(testObjectArray.find(f => f.id === 3));
    })

    it('findIndex', () => {
        expect(numberArray.findIndex(f => f === 3)).to.equal(testNumberArray.findIndex(f => f === 3));
        expect(objectArray.findIndex(f => f.id === 3)).to.equal(testObjectArray.findIndex(f => f.id === 3));
    })

    it('includes', () => {
        expect(numberArray.includes(f => f === 3)).to.equal(testNumberArray.includes(f => f === 3));
        expect(objectArray.includes(f => f.id === 3)).to.equal(testObjectArray.includes(f => f.id === 3));
    })
});