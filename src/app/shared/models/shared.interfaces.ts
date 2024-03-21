// export const URL_BASE = 'https://moviesdatabase.p.rapidapi.com/';

export const URL_BASE = 'https://jsonfakery.com/movies/paginated';

export interface BASE_JSONF {
    current_page: number
    data: Film_JSONF[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link_jsonF[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
  export interface Film_JSONF {
    id: string
    movie_id: number
    original_title: string
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    adult: number
    created_at: any
    updated_at: any
    casts: Cast[]
    sala: SalaType | undefined;
  }
  
  export interface Cast {
    id: string
    movie_id: number
    name: string
    original_name: string
    popularity: string
    profile_path: string
    character: string
    created_at: any
    updated_at: any
  }
  
  export interface Link_jsonF {
    url?: string
    label: string
    active: boolean
  }
  








// FOR API RAPIDAPI
export interface BASE_rapidapi {
    page: number
    next: string
    entries: number
    results: Films[]
}


export interface Films {
    _id: string
    id: string
    primaryImage: PrimaryImage
    titleType: TitleType
    titleText: TitleText
    originalTitleText: OriginalTitleText
    releaseYear: ReleaseYear
    releaseDate: any
}

export interface PrimaryImage {
    id: string
    width: number
    height: number
    url: string
    caption: Caption
    __typename: string
}

export interface Caption {
    plainText: string
    __typename: string
}

export interface TitleType {
    text: string
    id: string
    isSeries: boolean
    isEpisode: boolean
    __typename: string
}

export interface TitleText {
    text: string
    __typename: string
}

export interface OriginalTitleText {
    text: string
    __typename: string
}

export interface ReleaseYear {
    year: number
    endYear: any
    __typename: string
}

export interface DataSnackBarInfo {
    text: string;
    /**mi possono servire altre?
     * colorSnackBar ?
     * callBack ?
    */

}

export interface TypeViewsPost {
    value: ValueTypeViewPost,
    name?: string,
    icon: string,

}

export type ValueTypeViewPost = 'wrap' | 'column';

export interface DataDialog {
    casts: Cast[]
    sala: SalaType
    date: string;
    operator: boolean
}

export const toggleMemory = 'toggleV-';

export const viewTypeMemory = 'viewMemoryV-';


export interface SalaType {numero: number, imax: boolean | undefined};
