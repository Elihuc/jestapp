import { PasswordChecker } from "../../app/pass_checker/PasswordChecker"


describe('Password Checker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('Password with less than 8 characters is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual).toBe(false);
    })
    it('Password with no upper case is invalid', () => {
        const actual = sut.checkPassword('1234abcd');
        expect(actual).toBe(false);
    })
})