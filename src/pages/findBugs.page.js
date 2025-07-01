export class FindBugsPage {
    constructor(page) {
        this.page = page

        //element
        this.firstProductCard = page.locator('#ec_product_image_effect_4481370').getByRole('link')
        this.secondProductCard = page.locator('#ec_product_image_effect_4281370').getByRole('link')
    }

    async openFindBugsPage() {
        await this.page.goto('find-bugs/');
    }

    async tapFirstProductCard() {
        await this.firstProductCard.click()
    }

    async tapSecondProductCard() {
        await this.secondProductCard.click()
    }
}