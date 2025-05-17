import { Locator } from '@playwright/test';

/**
 * Gets the computed font size (in px) of a given Playwright Locator.
 * @param locator - The Playwright Locator of the element.
 * @returns The font size as a number (e.g., 16.0).
 */
export async function getFontSizeValue(locator: Locator): Promise<number> {
    const fontSize = await locator.evaluate(
        (el) => getComputedStyle(el).fontSize
    );
    return parseFloat(fontSize);
}
