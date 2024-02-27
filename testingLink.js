const axios = require('axios');
const fs = require('fs');

const amazonBaseUrl = 'https://www.amazon.com';
const searchUrl = '/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=';
const asinUrl = '/dp/';

const awsEndpoint = 'webservices.amazon.com';
const awsRegion = 'us-east-1';
const awsService = 'AWSECommerceService';
const awsPath = '/onca/xml';

let isbn; // Declare isbn in a higher scope

async function getAsinByIsbn(isbn) {
  const apiUrl = `https://${awsEndpoint}/${awsRegion}/${awsService}${awsPath}`;
}

async function generateAmazonLink(asin) {
  if (asin) {
    const asinPath = asinUrl + asin;
    const asinLink = amazonBaseUrl + asinPath;
    return asinLink;
  } else {
    const searchPath = searchUrl + encodeURIComponent(isbn);
    const searchLink = amazonBaseUrl + searchPath;
    return searchLink;
  }
}

async function updateFileAndGenerateLink() {
  try {
    // Read ISBN from the file
isbn = fs.readFileSync('isbnPipeLine.txt', 'utf-8').trim();
    console.log('ISBN read from the file:', isbn);

    // Get ASIN from ISBN
    const asin = await getAsinByIsbn(isbn);

    // Generate Amazon link
    const amazonLink = await generateAmazonLink(asin);
    console.log(amazonLink);

    // Save the Amazon link to the file
    if (amazonLink) {
      fs.writeFileSync('isbnPipeLine.txt', amazonLink);
      console.log('Amazon link written to the file:', amazonLink);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
  // Continue the loop after a delay (adjust the time as needed)
  setTimeout(updateFileAndGenerateLink, 5000); // 5000 milliseconds = 5 seconds
}

// Call the function
updateFileAndGenerateLink();


