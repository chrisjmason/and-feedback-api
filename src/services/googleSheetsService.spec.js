let requestPromise = require('request-promise');
let googleSheetsService = require('./googleSheetsService.js')

describe('googleSheetsService', () => {

    describe('call to add row to sheet', () => {

        beforeEach(() => {
            spyOn(requestPromise, 'post').andReturn(Promise.resolve({hello:"hello"}));
        });

        it('it should return object with 200 status code and null error message when call is successful', () => {
            expect(googleSheetsService.addRowToSheet({})).toBe({hello:"hello"});
        })
    })
});