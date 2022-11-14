class RickAndMorty {

  apiEpisodes = 'https://rickandmortyapi.com/api/episode';
  apiCharacters = 'https://rickandmortyapi.com/api/character';
  
  getCharacter(idCharacter) {
    return fetch(this.apiCharacters)
    .then((value) => value.json())
    .then((res) =>  {
      let result;
      let filterCharacter = res.results.filter((item) => {
        if(item.id !== idCharacter) {
          return null
        } else {
          return item.id === idCharacter;
        }
      });
      if(filterCharacter.length < 1) {
        result = null;
      } else {
        result = filterCharacter[0];
      }
      console.log(result)
      return result
    })
  }

  async getEpisode(idEpisode) {
    if(idEpisode === undefined || typeof idEpisode !== 'number') {
      throw new Error();
    }
    let result;
    let character;
    try{
      const response = await fetch(this.apiEpisodes);
      if(response.ok) {
        character = await response.json();    
      }
    } catch (err) {
      console.log(err);
    }

    let episodesArr = character.results;
    let filterEpisode = episodesArr.filter((item) => {
      if(item.id !== idEpisode) {
        return null
      } else {
        return item.id === idEpisode;
      }
    });

    if(filterEpisode.length < 1) {
      result = null;
    } else {
      result = filterEpisode[0];
    }
    return result;
  }
}

let rickAndMorty = new RickAndMorty();
console.log(rickAndMorty.getCharacter(2));
console.log(rickAndMorty.getEpisode(2));