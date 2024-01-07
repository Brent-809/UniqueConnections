import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import mockDataJson from "../data/data.json";
export let DataService = class DataService {
    constructor() {
        this.mockData = mockDataJson;
    }
    getHistories() {
        return this.mockData.histories;
    }
    getSeenFirtsHistories() {
        return this.mockData.histories.sort((story1, story2) => story1.seen > story2.seen ? 1 : story1.seen == story2.seen ? 0 : -1);
    }
    getArticles() {
        return this.mockData.articles;
    }
    getEvents() {
        return this.mockData.events;
    }
    getFollow() {
        return this.mockData.follow;
    }
    getFeed() {
        return this.mockData.feeds;
    }
    getStories() {
        return this.mockData.stories;
    }
    getGroups() {
        return this.mockData.groups;
    }
    getGroupCategories() {
        return this.mockData.group_categories;
    }
    getComments() {
        return this.mockData.comments;
    }
    getUsers() {
        return this.mockData.users;
    }
    getMessages() {
        return this.mockData.messages;
    }
    getNotifications() {
        return this.mockData.notifications;
    }
};
DataService = __decorate([
    Injectable({ providedIn: 'root' })
], DataService);
//# sourceMappingURL=data.service.js.map