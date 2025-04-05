import pkg from 'xlsx';
const { readFile, utils } = pkg;
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the Excel file
const workbook = readFile(join(__dirname, '../resources-excel.xlsx'));
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert to JSON
const data = utils.sheet_to_json(worksheet);

// Skip the header row and empty rows
const formattedResources = data
  .filter(row => row.__EMPTY && row.__EMPTY_1) // Filter out empty rows
  .filter(row => !isNaN(row.__EMPTY)) // Filter out the header row
  .map(row => ({
    id: row.__EMPTY.toString(),
    title: row.__EMPTY_1 || '',
    category: row.__EMPTY_3?.toLowerCase().replace(/[&\s]+/g, '-') || 'uncategorized',
    type: row.__EMPTY_2?.toLowerCase().includes('app') ? 'app' :
          row.__EMPTY_2?.toLowerCase().includes('book') ? 'book' :
          'resource',
    description: row.__EMPTY_6 || '',
    creator: row.__EMPTY_4 || '',
    link: row.__EMPTY_2?.startsWith('http') ? row.__EMPTY_2 : '#',
    isCanadian: row.__EMPTY_5?.toLowerCase() === 'yes'
  }));

// Write to JSON file
writeFileSync(
  join(__dirname, 'resources.json'),
  JSON.stringify(formattedResources, null, 2)
);

console.log('Conversion complete! Check src/data/resources.json'); 