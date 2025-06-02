import { Page, expect } from '@playwright/test';

export class ProfileFormPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://qa-assessment.pages.dev/');
        await expect(this.page.locator('#first-name')).toBeVisible();
    }

    // First Name
    async fillFirstName(name: string) {
        await this.page.fill('#first-name', name);
        await expect(this.page.locator('#first-name')).toHaveValue(name);
    }

    // Last Name
    async fillLastName(name: string) {
        await this.page.fill('#last-name', name);
    }

    // Email
    async fillEmail(email: string) {
        await this.page.fill('#email', email);
    }

    // Password
    async fillPassword(password: string) {
        await this.page.fill('#password', password);
    }

    // Confirm Password
    async fillConfirmPassword(password: string) {
        await this.page.fill('#confirm-password', password);
    }

    // LinkedIn
    async fillLinkedIn(url: string) {
        await this.page.fill('#linkedin', url);
    }

    // GitHub
    async fillGithub(url: string) {
        await this.page.fill('#github', url);
    }

    // Phone
    async fillPhone(phone: string) {
        await this.page.fill('#phone', phone);
    }

    async submitForm() {
        await this.page.click('button[type="submit"]');
    }

    async getErrorFor(fieldId: string) {
        return this.page.locator(`#${fieldId} + .error-message`);
    }

    async expectSuccess() {
        await expect(this.page.locator('.success-message')).toBeVisible();
    }
}