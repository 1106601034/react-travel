
export interface LanguageState {
    language: "de" | "en" | "fr";
    languageList: {
        name: string, 
        code: string
    }[];
}

const defaultState: LanguageState = {
    language: "en",
    languageList: [
        { name: "Deutsch", code: "de" },
        { name: "English", code: "en" },
        { name: "Francais", code: "fr" },
    ], 
};

export default (state = defaultState, action) => {
    return state;
};