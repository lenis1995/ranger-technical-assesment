import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';
import { Roles } from '../constants/htmlRoles';
import { Urls } from '../constants/urls';
import { ErrorMessages } from '../constants/errorMessages';
import { LinkNames, TextBoxNames, ButtonNames } from '../constants/roleNames';
import { TestData } from '../constants/testData';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;

test('Sign in to Wikipedia', async ({ page }) => {
    if (!wikipediaUsername || !wikipediaPassword) {
        throw new Error(ErrorMessages.MISSING_CREDENTIALS);
    }

    await test.step('Go to Wikipedia and open login form', async () => {
        await page.goto(Urls.WIKIPEDIA_HOME);
        await page.getByRole(Roles.LINK, { name: LinkNames.LOG_IN }).click();
    });

    await test.step('Fill login credentials and submit', async () => {
        await page
            .getByRole(Roles.TEXT_BOX, { name: TextBoxNames.USERNAME })
            .fill(wikipediaUsername);
        await page
            .getByRole(Roles.TEXT_BOX, { name: TextBoxNames.PASSWORD })
            .fill(wikipediaPassword);
        await page
            .getByRole(Roles.BUTTON, { name: ButtonNames.LOG_IN })
            .click();
    });

    await test.step('Store login session and verify login success', async () => {
        await page.context().storageState({ path: TestData.LOGIN_AUTH_PATH });
        await expect(page.getByText(wikipediaUsername).first()).toBeVisible();
    });
});
