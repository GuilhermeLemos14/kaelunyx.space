export const languages: { level: string; langs: string[]; abbr?: string }[] = [
    {
        abbr: "C1/C2",
        level: "Native",
        langs: ["pt-BR"],
    },
    {
        level: "B2/C1",
        langs: ["en", "en-US", "en-CA"],
    },
    {
        level: "A1/A2",
        langs: ["es", "es-ES"],
    },
    {
        abbr: "A1",
        level: "Soon",
        langs: ["fr-CA"],
    }
];

export const moreAbout: { title: string; description: string }[] = [
    {
        title: "Neurotype & abilities",
        description: "Autistic (level 1) with high abilities / giftedness. I learn deeply by observing — sometimes I don't need to ask, I just watch and understand."
    },
    {
        title: "Therian & Furry",
        description: "I identify strongly with the therian community (animal‑hearted) and I'm also furry. A fursuit is planned for the future. I've had mixed experiences with closed groups, but the identity itself is real for me."
    },
    {
        title: "Music & piano",
        description: "I'm a pianist who makes covers. My taste is instrumental, cosmic, cinematic — Onoken, Sakuzyo, Creo, Kiynaria. Melodies tell complex stories without a single word."
    },
    {
        title: "Dark softie + whimsigoth",
        description: "Dark oversized hoodies, curly growing hair, lava rock bracelet, lapis lazuli pendant. Not emo. Just genuine. I feel deeply but don't cry easily — yet beauty and kindness move me."
    },
    {
        title: "Values",
        description: "Authenticity over hype. Real emotion without drama. People say I comfort others with my words — I get shy about it, but I'm glad if I can help."
    },
    {
        title: "Communities & connection",
        description: "I've tried several spaces (therian, etc.) and found many too closed or performative. I still want to belong — but at my own pace, without having to prove myself constantly. If you value kindness, creativity, gentle connection, or just want to talk, feel free to reach out."
    }
];

const _pronouns: { [key: string]: { lang: string; list: { link: string; pronouns: string }[] } } = {
    English: {
        lang: "en",
        list: [
            { link: "he", pronouns: "he/him" },
            { link: "they/them/themself", pronouns: "they/them/themself" },
            { link: "xe", pronouns: "xe/xem" },
        ]
    },
    Portuguese: {
        lang: "pt",
        list: [
            { link: "ele", pronouns: "o/ele/o" },
            { link: "o,elu,o,delu,nelu,um,elus,delus,nelus,os,uns,co,go,meu,esse,este,", pronouns: "o/elu/o" },
            { link: "el&ael", pronouns: "ê/el/e ou ae/ael/e" },
            { link: "elx", pronouns: "x/elx/x" },
        ]
    },
    Spanish: {
        lang: "es",
        list: [
            { link: "él&elle&ellu", pronouns: "él/lo o elle/le o ellu/lu" },
            { link: "xelle&ellx", pronouns: "xelle/le o ellx/lx" }
        ]
    },
    French: {
        lang: "fr",
        list: [
            { link: "il", pronouns: "il/le" },
            { link: "el&iel&ael", pronouns: "el/lea ou iel/lea ou ael/lea" },
            { link: "on", pronouns: "on/en" }
        ]
    }
} as const;

export const pronouns = Object.entries(_pronouns).map(([name, data]) => ({
    name,
    ...data
}));