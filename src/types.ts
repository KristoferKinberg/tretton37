export interface Coworker {
    name: string;
    email: string;
    phoneNumber: string;
    office: string;
    tagline: string | null;
    mainText: string;
    github: string | null;
    twitter: string | null;
    stackOverflow: string | null;
    linkedIn: string | null;
    imagePortraitUrl: string,
    imageBodyUrl: string;
    imageWallOfLeetUrl: string;
    highlighted: boolean;
}

export interface CoworkersObj {
    [key: string]: Coworker;
}

export interface ReduxState {
    data: {
        coworkers: CoworkersObj;
        filteredCoworkers: Coworker[];
    }
}
