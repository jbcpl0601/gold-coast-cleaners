const fs = require("fs");
const path = require("path");
const https = require("https");

const GALLERY_URL = "https://probondcleaners.au/gallery/";
const OUTPUT_DIR = path.join(__dirname, "../public/images/gallery");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      
      fileStream.on("finish", () => {
        fileStream.close();
        resolve(filepath);
      });
      
      fileStream.on("error", (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on("error", reject);
  });
}

async function scrape() {
  console.log(`Fetching HTML from ${GALLERY_URL}...`);
  try {
    const response = await fetch(GALLERY_URL);
    const html = await response.text();
    
    // Find all image URLs looking like uploads
    const matches = html.match(/https:\/\/probondcleaners\.au\/wp-content\/uploads\/[^"\s\0'\''>]+\.(?:jpg|jpeg|png)/gi);
    
    if (!matches || matches.length === 0) {
      console.log("No images found!");
      return;
    }
    
    // De-duplicate URLs
    let uniqueUrls = [...new Set(matches)];
    
    // Filter out some logos/non-gallery items, mostly looking for things named numerically or with specific patterns if identifiable,
    // but without reliable metadata, we'll download most jpegs/pngs and exclude obvious banner/logo files
    uniqueUrls = uniqueUrls.filter(url => 
      !url.includes("logo") && 
      !url.includes("LOGO") && 
      !url.includes("banner") &&
      !url.includes("-150x150") && // Skip thumbnails if possible
      !url.includes("-300x") && 
      !url.includes("-768x") &&
      !url.includes("-1024x") &&
      !url.includes("-e16") // Sometimes scaled versions
    );
    
    console.log(`Found ${uniqueUrls.length} unique filtered images. Downloading...`);
    
    for (let i = 0; i < uniqueUrls.length; i++) {
        const url = uniqueUrls[i];
        let filename = path.basename(url);
        // ensure unique filename if collisions exist or random names happen
        const filepath = path.join(OUTPUT_DIR, filename);
        
        try {
            console.log(`[${i+1}/${uniqueUrls.length}] Downloading ${filename}...`);
            await downloadImage(url, filepath);
        } catch (e) {
            console.error(`Failed to download ${url}: ${e.message}`);
        }
    }
    console.log("Done scraping images.");
  } catch(e) {
      console.error("Scraping failed:", e);
  }
}

scrape();
