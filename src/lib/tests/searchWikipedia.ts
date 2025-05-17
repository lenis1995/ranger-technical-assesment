import { Page, expect } from '@playwright/test';
import { Roles } from '../../constants/htmlRoles';
import { Selectors, ListItemIndexes } from '../../constants/selectors';
import { TestData } from '../../constants/testData';
import { Urls } from '../../constants/urls';
import { SearchBoxNames, LinkNames } from '../../constants/roleNames';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia
 * 2. Go to the "Artificial intelligence" page
 * 3. Click "View history"
 * 4. Assert that the latest edit was made by the user "Maxeto091"
 *
 * Instructions:
 * - Run the test and ensure it performs all steps described above
 * - Add assertions to the test to ensure it validates the expected
 *   behavior:
 *   - If the latest edit was not made by "Maxeto0910" update the steps above accordingly
 *   - Write your assertion to provide clear diagnostic feedback if it fails
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    // STEP 1: Navigate to Wikipedia URL
    await page.goto(Urls.WIKIPEDIA_HOME);

    // STEP 2: Enter text 'artificial' into the search input field */
    const searchInputField = page.getByRole(Roles.SEARCH_BOX, {
        name: SearchBoxNames.SEARCH_WIKIPEDIA,
    });
    await searchInputField.fill(TestData.SEARCH_QUERY_AI);

    // STEP 3: Click the 'Artificial Intelligence' link
    const artificialIntelligenceLink = page.getByRole(Roles.LINK, {
        name: LinkNames.AI_PAGE,
    });
    await artificialIntelligenceLink.click();

    // STEP 4: Click the "View history" link
    const viewHistoryLink = page.getByRole(Roles.LINK, {
        name: LinkNames.VIEW_HISTORY,
    });
    await viewHistoryLink.click();

    // STEP 5: Find the selector for latest editor in history list
    const latestEditorUsername = page
        .locator(Selectors.PAGE_HISTORY)
        .getByRole(Roles.LIST)
        .first()
        .getByRole(Roles.LISTITEM)
        .first()
        .getByRole(Roles.LINK)
        .nth(ListItemIndexes.EDITOR_USERNAME);

    // STEP 6: Get text from element and assert is the expected one
    expect(latestEditorUsername).toHaveText(TestData.LATEST_EDITOR_USERNAME);
}
