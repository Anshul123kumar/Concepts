// Importing required modules
// const fs = require('fs');
const fs = require("fs-extra");
const tar = require("tar");

// Defining the files to be included in the tar archive
const filesToInclude = ["file1.txt", "file2.txt", "folder/file3.txt"];

// Creating a tar archive
tar.create(
    {
      file: cdnTarName + ".tar.gz",
      cwd: "./build",
      gzip: true,
      prefix: cdnTarContextPath,
    },
    ["."]
  )
  .then(() => {
    console.log("Tar archive created successfully.");
  })
  .catch((error) => {
    console.error("Error creating tar archive:", error);
  });

// tar.create(
//   {
//     file: 'archive.tar', // Output file name
//     cwd: '/path/to/project', // Working directory (where files are located)
//     gzip: true, // Whether to compress the archive,
//     prefix: cdnTarContextPath, 
//   },
//   filesToInclude // List of files to include in the archive, if [.], means include all the files in the cwd
// )


// Extracting the tar file
/*
tar.extract({
  file: cdnTarName + ".tar.gz",
  cwd: '/path/to/destination', // Destination directory for extracted files
  gzip: true,
}).then(() => {
  console.log('Tar archive extracted successfully.');
}).catch(error => {
  console.error('Error extracting tar archive:', error);
});
*/
