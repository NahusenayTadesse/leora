import fs from "fs";
import path from "path";
import sharp from "sharp";

// folder with your images
const imagesDir = path.join(process.cwd(), "static/images");

// get all image files
const files = fs
  .readdirSync(imagesDir)
  .filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(imagesDir, `${baseName}-thumb${ext}`);

  // resize to 400px width
  sharp(inputPath)
    .resize({ width: 400 })
    .toFile(outputPath)
    .then(() => console.log(`Created: ${outputPath}`))
    .catch((err) => console.error(`Error processing ${file}:`, err));
}
