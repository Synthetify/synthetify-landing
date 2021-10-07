import english from './english'
import polski from './polski'
export type Language = 'english' | 'polski'

const dictionary: { [key in Language]: { [key: string]: string | string[] } } = {
  english,
  polski
}

export default dictionary
