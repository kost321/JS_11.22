(async () => {
  class RickAndMorty {

    apiCharacters = 'https://rickandmortyapi.com/api/character';
    apiEpisodes = 'https://rickandmortyapi.com/api/episode';
    
    getCharacter(idCharacter) {
      let result;
      if(idCharacter === undefined || typeof idCharacter !== 'number' || isNaN(idCharacter)) {
        throw new Error();
      }

      return fetch(this.apiCharacters)
      .then((value) => value.json())
      .then((res) => {
        let filterCharacter = res.results.filter((item) => {
          if(item.id !== idCharacter) {
            return null;
          } else {
            return item.id === idCharacter;
          }
        });

        if(filterCharacter.length < 1) {
          result = null;
        } else {
          result = filterCharacter[0];
        }
        return result;
      })
      .catch(err => console.log(err));
    }
  
    async getEpisode(idEpisode) {
      let result;
      let character;
      
      if(idEpisode === undefined || typeof idEpisode !== 'number' || isNaN(idEpisode)) {
        throw new Error();
      }
      
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
          return null;
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
  
  let rickAndMorty =  new RickAndMorty();
  await rickAndMorty.getCharacter(2);
  await rickAndMorty.getEpisode(20);
})();
