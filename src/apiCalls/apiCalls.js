const complexRequest = async (communityId) => {
  const response = await fetch(
    `https://uptown-garden-apartments.herokuapp.com/api/v1/community?id=${communityId}`
  );
  let resp = await response.json();
  return resp;
};

export default complexRequest;
