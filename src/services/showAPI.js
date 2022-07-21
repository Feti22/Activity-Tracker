const apiKey = 'b40f5950ac48320ea0af234307f072e1';

export const getShowData = async(query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-CA&query=${query}`);
  const data = await response.json();
  return data;
}

export const getShowById = async(id) => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-CA`);
  const data = response.json();
  return data;
}

const popularShowURL = (id) => {
  const showURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-CA&sort_by=popularity.desc&with_watch_providers=${id}&watch_region=CA`;
  return showURL;
}

export const popularShowsData = async() => {
  const netflixResponse = await fetch(popularShowURL(8));
  const netflixData = await netflixResponse.json();

  const craveResponse = await fetch(popularShowURL(230));
  const craveData = await craveResponse.json();

  const disneyResponse = await fetch(popularShowURL(337));
  const disneyData = await disneyResponse.json();

  const appleResponse = await fetch(popularShowURL(350));
  const appleData = await appleResponse.json();
  return await Promise.all([netflixData, craveData, disneyData, appleData]);
}
