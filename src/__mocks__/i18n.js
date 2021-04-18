
let i18n = jest.genMockFromModule('../i18n');

i18n = {

    t: () => { return true; },
    on: (event, callback) => { callback(); }

}


export default i18n