import { FindBugsPage, ProductPage, BugPopup } from './indexPages';

export class App {
	constructor(page) {
		this.page = page;
        this.findBugsPage = new FindBugsPage(page)
        this.productPage = new ProductPage(page)
        this.bugPopup = new BugPopup(page)
	}
}