import {test} from 'playwright/test'
import { __await } from 'tslib'


    test('the first test', async ({page}) => {

       await page.goto('http://localhost:4200/');
       await page.getByText('Forms').click();
       await page.getByText('Form Layouts').click();


    })
    
