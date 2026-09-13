import { chromium } from 'playwright';

const URL = 'http://localhost:4173/';

// Discover the localStorage key used by the app so we can seed data.
// The useLocalStorage hook key is defined in App.jsx.
const sample = [
  { id: '1', description: 'Grocery shopping', amount: 84.5, date: '2024-06-03', category: 'Food' },
  { id: '2', description: 'Monthly metro pass', amount: 55, date: '2024-06-01', category: 'Transport' },
  { id: '3', description: 'Movie night', amount: 32.75, date: '2024-06-08', category: 'Entertainment' },
  { id: '4', description: 'Electricity bill', amount: 120.4, date: '2024-06-10', category: 'Bills' },
  { id: '5', description: 'New headphones', amount: 199.99, date: '2024-06-12', category: 'Shopping' },
  { id: '6', description: 'Dinner with friends', amount: 68.2, date: '2024-06-15', category: 'Food' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

// 1) Empty state
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: 'screenshot-empty.png', fullPage: true });
console.log('Captured empty state');

// Detect localStorage keys the app created, then seed our data into the expenses key.
const keys = await page.evaluate(() => Object.keys(window.localStorage));
console.log('localStorage keys:', JSON.stringify(keys));

const expenseKey = keys.find((k) => /expense/i.test(k)) || keys[0];
if (expenseKey) {
  await page.evaluate(
    ({ key, data }) => window.localStorage.setItem(key, JSON.stringify(data)),
    { key: expenseKey, data: sample }
  );
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screenshot-with-data.png', fullPage: true });
  console.log(`Captured populated state (seeded key: ${expenseKey})`);
} else {
  console.log('No localStorage key detected; skipping populated screenshot');
}

await browser.close();
