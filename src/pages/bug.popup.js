export class BugPopup {
    constructor(page) {
        this.page = page

        //element
        this.crashRadio = page.getByRole('radio', { name: 'Crash', exact: true })
        this.contentRadio = page.getByRole('radio', { name: 'Content', exact: true })
        this.functionalRadio = page.getByRole('radio', { name: 'Functional', exact: true })
        this.visualRadio = page.getByRole('radio', { name: 'Visual', exact: true })
        this.performanceRadio = page.getByRole('radio', { name: 'Performance', exact: true })
        this.commentIsPostedUnderRadio = page.getByRole('radio', { name: 'The comment is posted under' })
        this.textShouldBeEnglisRadio = page.getByRole('radio', { name: 'The text should be in English' })
        this.manufacturerLinkShowsRadio = page.getByRole('radio', { name: 'The manufacturer link shows' })
        this.productImageFillsRadio = page.getByRole('radio', { name: 'The product image fills the' })
        this.productInTheHotItemRadio = page.getByRole('radio', { name: 'The product in the Hot Item' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.resultHeader = page.locator('#result-popup')
        this.issueReportButton = page.getByRole('button', { name: 'View Issue Report' })
    }

    async choosingAnswersIfAppCrashesWhileWritingAComment() {
        await this.crashRadio.check()
        await this.commentIsPostedUnderRadio.check()
        await this.submitButton.click()
    }

    async choosingAnswerIfProductDescriptionIsTranslatedIncorrectly() {
        await this.contentRadio.check()
        await this.textShouldBeEnglisRadio.check()
        await this.submitButton.click()
    }

    async choosingAnAnswerIfAnIncorrectLinkToTheManufacturerIsSpecified() {
        await this.functionalRadio.check()
        await this.manufacturerLinkShowsRadio.check()
        await this.submitButton.click()
    }

    async selectingResponsesIfTheImageDoesNotMatchTheProductCard() {
        await this.visualRadio.check()
        await this.productImageFillsRadio.check()
        await this.submitButton.click()
    }

    async selectingResponsesWhenTheHotProductCardIsNotLoading() {
        await this.performanceRadio.check()
        await this.productInTheHotItemRadio.check()
        await this.submitButton.click()
    }
}