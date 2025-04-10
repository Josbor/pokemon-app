export interface PokemonListResponse {
    count: number
    next: string | null
    previous: string | null
    results: Pokemon[]
  }

  export interface Pokemon  {
    name: string
    url: string
  }


 export  interface PokemonType {
    slot: number
    type: {
      name: string
      url: string
    }
  }
  
  export interface PokemonAbility {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }
  
  export interface PokemonStat {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }
  
  export interface PokemonSprites {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
    other?: {
      "official-artwork"?: {
        front_default: string
      }
    }
  }

  export interface PokemonDetail {
    id: number
    name: string
    height: number
    weight: number
    types: PokemonType[]
    abilities: PokemonAbility[]
    stats: PokemonStat[]
    sprites: PokemonSprites
  }


  
  export interface Ability {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }