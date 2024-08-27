function checkIfSearchedSongIsPresent(song, searchText) {
  if (!searchText) return false; 
  const lowercasedSearchText = searchText.toLowerCase();
  const artistMatch = song.artist.toLowerCase().includes(lowercasedSearchText);
  const nameMatch = song.name.toLowerCase().includes(lowercasedSearchText);

  return artistMatch || nameMatch;
}

export default checkIfSearchedSongIsPresent;
