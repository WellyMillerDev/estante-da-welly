import fs from "fs";
import path from "path";

const imagesDir = path.resolve("public/images");
const outputFile = path.resolve("public/images.json");

function getAllImages(dir) {
  const files = fs.readdirSync(dir);
  let result = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      result = result.concat(getAllImages(fullPath));
    } else if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(file)) {
      result.push(path.relative("public", fullPath).replace(/\\/g, "/"));
    }
  }

  return result;
}

const allImages = getAllImages(imagesDir);
fs.writeFileSync(outputFile, JSON.stringify(allImages, null, 2));
console.log(`✅ Generated ${allImages.length} images in public/images.json`);
