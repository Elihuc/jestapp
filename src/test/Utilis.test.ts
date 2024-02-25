import { getStringTesting, toUpperCase } from "../app/Utilis";

describe('Utilis test suite', () =>{

    it('Should return string a uppercase', () => {
        // arrange:
        const sut = toUpperCase;
        const expected = 'ELIHU';
        // act:
        const actual = sut('Elihu');
        // assert:
        expect(actual).toBe(expected);
    })

    describe('getStringTesting for arg Elihu Schitrit should', () => {
        it('return right lower case', () => {
            const actual = getStringTesting('Elihu Schitrit');
            expect(actual.lowercase).toBe('elihu schitrit');
        })
        it('return right upper case', () => {
            const actual = getStringTesting('Elihu Schitrit');
            expect(actual.uppercase).toBe('ELIHU SCHITRIT');
        })
        it('return right length of characters', () => {
            const actual = getStringTesting('Elihu Schitrit');
            expect(actual.characters).toHaveLength(14);
        })
        it('return right characters', () => {
            const actual = getStringTesting('Elihu Schitrit');
            expect(actual.characters).toContain<string>('S');
            expect(actual.characters).toEqual(['E','l','i','h','u',' ','S','c','h','i','t','r','i','t']);
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S','c','h','i','t','r','i','t','E','l','i','h','u',' '])
            )
        })
        it('return right extra info', () => {
            const actual = getStringTesting('Elihu Schitrit');
            expect(actual.extraInfo).toEqual({});
        })
    })

    describe('ToUpperCase loop testing', () => {
        it.each([
            {input: 'reem', expected: 'REEM'},
            {input: 'eyal', expected: 'EYAL'},
            {input: 'almog', expected: 'ALMOG'},
            {input: 'lia', expected: 'LIA'},
        ])('$input toUpperCase sould be $expected', ({input,expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        })
    })

});