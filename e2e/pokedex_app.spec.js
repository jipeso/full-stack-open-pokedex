import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  }),

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Hidden ability').first()).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
  })
})
