export async function complexRequest(communityId) {
  const response = await fetch(`https://uptown-garden-apartments-d964b0c70374.herokuapp.com//api/v1/community?id=${communityId}`
   
  );
  let resp = await response.json();
  return resp;
}

export async function apartmentRequest(apartmentId) {
  const response = await fetch(
    `https://uptown-garden-apartments-d964b0c70374.herokuapp.com//api/v1/apartments?id=${apartmentId}`
  );
  let resp = await response.json();
  return resp;
}
