import english from './english'

export type Language = 'english'

const dictionary: { [key in Language]: { [key: string]: string | string[] } } = {
  english
}

export default dictionary
