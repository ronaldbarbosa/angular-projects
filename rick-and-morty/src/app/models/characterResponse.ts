import { Character } from './character';

export interface CharacterResponse {
    info: {
        count: number,
        next: string | null,
        pages: number,
        prev: string | null
    },
    results: Array<Character>
}