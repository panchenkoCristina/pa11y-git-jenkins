const fs = require('fs');
const { exec } = require('child_process');

const jsonFile = '/workspace/links.json';

fs.readFile(jsonFile, 'utf8', (err, data) => {
  if(err) {
    console.error('Error al leer el archivo: ', err);
    return;
  }

  const urls = JSON.parse(data);
  urls.forEach((url) => {
    exec(`/workspace/pa11y_for_each_url.sh "${url}"`, (error, stdout, stderr) => {
        if(error) {
          if(!stderr.includes('Puppeteer old Headless deprecation warning')){
	          console.error(`Error al ejecutar el script: ${error.message}`);
	        }
	      }

        if(stdout){
          console.log(`Se ha analizado ${url}`);
        } 
    });
  });
});



