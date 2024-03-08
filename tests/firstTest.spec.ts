import {test} from 'playwright/test'
import { __await } from 'tslib'


    test.skip('the first test', async ({page}) => {

       await page.goto('https://golfdistrict-stage1.vercel.app/');
       
       await page.locator('.object-cover').click();

      await page.getByTestId('signin-button-id').click();

      await page.getByTestId('forgot-password-id').click();

      await page.getByTestId('forgot-password-email-id').fill("verti_kiran_vishwakarma@golfdistrict.com");

      await page.getByTestId('forgot-password-submit-id').click();

    })
    
    test('Login to Gmail and Click on Password Reset Link', async ({ page }) => {
      // Navigate to Gmail login page
      await page.goto('https://mail.google.com/');
  
      // Fill in the email field
      await page.fill('input[type="email"]', 'verti_kiran_vishwakarma@golfdistrict.com');
  
      // Click on the "Next" button after entering email
      await page.click('div[id="identifierNext"]');
  
      // Wait for password field to be visible
      await page.waitForSelector('input[type="password"]');
  
      // Fill in the password field
      await page.fill('input[type="password"]', 'Kittu123@#');
  
      // Click on the "Next" button after entering password
      await page.click('div[id="passwordNext"]');

      // await page.locator('#1i').click();
  
      // Wait for the Gmail inbox to load
      await page.waitForNavigation();
  
      // Find and click on the email containing the password reset link

      await page.getByRole('link',{name: 'Forgot Password - New'}).click();
  
      // Wait for email to open

      await page.locator('.gE').first().click();

      // Forgot password button
      await page.getByRole('link',{name: 'Forgot Password'}).click();

      // Get all open pages
       const pages = await context.pages();

      // Switch to the new tab (the last one in the array)
       const newPage = pages[pages.length - 1];

   
   await page.locator('reset-password-id').fill("test123#");

  await page.getByTestId('reset-confirm-password-id').fill("test123#");

  await page.getByTestId('submit-button-id').click();



})
  
  