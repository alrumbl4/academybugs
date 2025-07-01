export class ProductPage {
    constructor(page) {
        this.page = page

        //element
        this.commentField = page.getByRole('textbox', { name: 'Comment' })
        this.nameField = page.getByRole('textbox', { name: 'Name*' })
        this.emailField = page.getByRole('textbox', { name: 'Email*' })
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' })
        this.currencySelect = page.locator('#ec_currency_conversion')
        this.descriptionText = page.getByRole('paragraph').filter({ hasText: 'Nam nec tellus a odio' })
        this.linkToTheManufacturer = page.getByRole('link', { name: 'DNK' })
        this.hotProductCard = page.locator('#ec_image_product_widget_anchor-bracelet_1_0')
        this.spinner = page.locator('#post-1820 div').nth(2)
    }

    async fillingInFieldsAndSendingComment() {
        await this.commentField.click()
        await this.commentField.fill('test')
        await this.nameField.click()
        await this.nameField.fill('test')
        await this.emailField.click()
        await this.emailField.fill('test')
        await this.postCommentButton.click()
    }

    async choosingEuroAsCurrency() {
        await this.currencySelect.selectOption('EUR')
    }

    async clickDescriptionText() {
        await this.descriptionText.click()
    }

    async clickOnTheManufacturerLink() {
        this.linkToTheManufacturer.click()
    }

    async clickHotProductCard() {
        this.hotProductCard.click()
        this.spinner.click()
    }
}