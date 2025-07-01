import { test, expect } from '../src/helpers/fixtures/web.js';

test.beforeEach(async ({ app }) => {
  await app.findBugsPage.openFindBugsPage()
});


test('Написание комментария к товару', async ({ app }) => {
  await app.findBugsPage.tapFirstProductCard()
  await app.productPage.fillingInFieldsAndSendingComment()
  await app.bugPopup.choosingAnswersIfAppCrashesWhileWritingAComment()
  await expect(app.bugPopup.resultHeader).toBeVisible()
  await expect(app.bugPopup.resultHeader).toContainText('✅ Correct!')
  await expect(app.bugPopup.issueReportButton).toBeVisible()
});

test('Отображение описания товара в карточке', async ({ app }) => {
  await app.findBugsPage.tapFirstProductCard()
  await app.productPage.clickDescriptionText()
  await app.bugPopup.choosingAnswerIfProductDescriptionIsTranslatedIncorrectly()
  await expect(app.bugPopup.resultHeader).toBeVisible()
  await expect(app.bugPopup.resultHeader).toContainText('✅ Correct!')
  await expect(app.bugPopup.issueReportButton).toBeVisible()
});

test('Переход на страницу производителя товара', async ({ app }) => {
  await app.findBugsPage.tapFirstProductCard()
  await app.productPage.clickOnTheManufacturerLink()
  await app.bugPopup.choosingAnAnswerIfAnIncorrectLinkToTheManufacturerIsSpecified()
  await expect(app.bugPopup.resultHeader).toBeVisible()
  await expect(app.bugPopup.resultHeader).toContainText('✅ Correct!')
  await expect(app.bugPopup.issueReportButton).toBeVisible()
});

test('Размер изображения соответствует размеру карточки товара', async ({ app }) => {
  await app.findBugsPage.tapSecondProductCard()
  await app.bugPopup.selectingResponsesIfTheImageDoesNotMatchTheProductCard()
  await expect(app.bugPopup.resultHeader).toBeVisible()
  await expect(app.bugPopup.resultHeader).toContainText('✅ Correct!')
  await expect(app.bugPopup.issueReportButton).toBeVisible()
});

test('Переход к горящему товару', async ({ app }) => {
  await app.findBugsPage.tapFirstProductCard()
  await app.productPage.clickHotProductCard()
  await app.bugPopup.selectingResponsesWhenTheHotProductCardIsNotLoading()
  await expect(app.bugPopup.resultHeader).toBeVisible()
  await expect(app.bugPopup.resultHeader).toContainText('✅ Correct!')
  await expect(app.bugPopup.issueReportButton).toBeVisible()
});
