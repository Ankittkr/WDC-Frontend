export const getGoogleImage = (url, size = 320) => {
  const id = url.split("id=")[1]
  console.log(`https://lh3.googleusercontent.com/d/${id}=w${size}`);
  
  return `https://lh3.googleusercontent.com/d/${id}=w${size}`
}
// https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320