import { Page, expect } from '@playwright/test';
import { Urls } from '../../constants/urls';
import { getFontSizeValue } from '../../utils/domUtils';
import { Selectors } from '../../constants/selectors';
import { Roles } from '../../constants/htmlRoles';
import { TestData } from '../../constants/testData';
import { FontSizeButtonLabels } from '../../constants/roleNames';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto(Urls.WIKIPEDIA_HOME);

    const textElement = page.locator(Selectors.WELCOME_WIKIPEDIA);
    const defaultTextSizeOption = page
        .getByRole(Roles.RADIO_BUTTON, {
            name: FontSizeButtonLabels.STANDARD,
        })
        .first();
    await defaultTextSizeOption.click();

    // STEP 1: Get the default font size before any changes
    const defaultFontSize = await getFontSizeValue(textElement);

    // STEP 2: Select the 'Small' text size option and assert font size decreased
    const smallTextSizeOption = page.getByRole(Roles.RADIO_BUTTON, {
        name: FontSizeButtonLabels.SMALL,
    });
    await smallTextSizeOption.click();

    const smallFontSize = await getFontSizeValue(textElement);
    expect(smallFontSize).toBeLessThan(defaultFontSize);

    // STEP 3: Select the 'Large' text size option and assert font size increased
    const largeTextSizeOption = page.getByRole(Roles.RADIO_BUTTON, {
        name: FontSizeButtonLabels.LARGE,
    });
    await largeTextSizeOption.click();

    const largeFontSize = await getFontSizeValue(textElement);
    expect(largeFontSize).toBeGreaterThan(defaultFontSize);

    // STEP 4: Select the 'Standard' text size option and assert font size is back to default
    const standardTextSizeOption = page
        .getByRole(Roles.RADIO_BUTTON, {
            name: FontSizeButtonLabels.STANDARD,
        })
        .first();
    await standardTextSizeOption.click();

    const standardFontSize = await getFontSizeValue(textElement);
    expect(standardFontSize).toBe(defaultFontSize);

    // STEP 5: Click the link to view the total number of articles in English
    const totalArticlesLink = page
        .locator(Selectors.ARTICLES_COUNT)
        .getByRole(Roles.LIST)
        .getByRole(Roles.LISTITEM)
        .last()
        .getByRole(Roles.LINK)
        .first();
    await totalArticlesLink.click();

    const totalEnglishArticles = page
        .getByRole(Roles.TABLE_ROW)
        .nth(1)
        .getByRole(Roles.TABLE_CELL)
        .last();

    const totalEnglishArticlesText = await totalEnglishArticles.innerText();
    const totalEnglishArticlesNumber = parseInt(
        totalEnglishArticlesText.replace(/,/g, ''),
        10
    );

    expect(totalEnglishArticlesNumber).toBeLessThan(
        TestData.MAX_ENGLISH_ARTICLES
    );
}
