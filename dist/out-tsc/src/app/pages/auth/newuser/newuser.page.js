import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import jwt_decode from 'jwt-decode';
export let NewuserPage = class NewuserPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.otherValue = '';
        this.genders = [
            {
                name: 'Man',
                imageUrl: 'https://uniqueconnections.be/images/boy.gif',
            },
            {
                name: 'Vrouw',
                imageUrl: 'https://uniqueconnections.be/images/girl.gif',
            },
            {
                name: 'Non-Binair',
                imageUrl: 'https://uniqueconnections.be/images/non-binary.gif',
            },
            {
                name: 'Genderqueer',
                imageUrl: 'https://uniqueconnections.be/images/genderqueer.png',
            },
            {
                name: 'Demiboy',
                imageUrl: 'https://uniqueconnections.be/images/demiboy.png',
            },
            {
                name: 'Demigirl',
                imageUrl: 'https://uniqueconnections.be/images/demigirl.png',
            },
            {
                name: 'Trans MTF',
                imageUrl: 'https://uniqueconnections.be/images/mtf.png',
            },
            {
                name: 'Trans FTM',
                imageUrl: 'https://uniqueconnections.be/images/ftm.png',
            },
            {
                name: 'Agender',
                imageUrl: 'https://uniqueconnections.be/images/agender.png',
            },
            {
                name: 'Bigender',
                imageUrl: 'https://uniqueconnections.be/images/bigender.png',
            },
            {
                name: 'Two-Spirit',
                imageUrl: 'https://uniqueconnections.be/images/two-spirit.png',
            },
            {
                name: 'Genderfluid',
                imageUrl: 'https://uniqueconnections.be/images/genderfluid.png',
            },
            {
                name: 'Androgynous',
                imageUrl: 'https://uniqueconnections.be/images/androgynous.png',
            },
            {
                name: 'Other',
                imageUrl: '',
            },
        ];
        this.selectedGender = null;
        this.cardScaleAnimation = true;
        this.token = this.apiService.token;
    }
    ngOnInit() {
        const decodedToken = jwt_decode(this.token);
        console.log(decodedToken);
    }
    onCardClick(gender) {
        this.selectedGender = gender;
        console.log(gender);
    }
    updateGender() {
        const userId = this.apiService.getUserIdFromToken();
        let selectedGender = '';
        if (this.selectedGender.name === 'Other') {
            selectedGender = this.otherValue; // Use the value from the other text field
        }
        else {
            selectedGender = this.selectedGender.name;
        }
        if (userId) {
            this.apiService.updateUserGender(userId, selectedGender).subscribe((response) => {
                console.log('Update Response:', response);
                console.log(response.id && response.gender === selectedGender);
                if (response.id && response.gender === selectedGender) {
                    this.router.navigate(['/newuser1']);
                }
            }, (error) => {
                console.log('Error:', error);
            });
        }
        else {
            console.log('User ID not found');
        }
    }
};
NewuserPage = __decorate([
    Component({
        selector: 'app-newuser',
        templateUrl: './newuser.page.html',
        styleUrls: ['./newuser.page.scss'],
        animations: [
            trigger('cardScaleAnimation', [
                transition(':enter', [
                    style({ transform: 'scale(0.5)', opacity: 0 }),
                    animate('.3s ease-out', style({ transform: 'scale(1)', opacity: 1 })),
                ]),
                transition(':leave', [
                    style({ transform: 'scale(1)', opacity: 1 }),
                    animate('.3s ease-out', style({ transform: 'scale(0.5)', opacity: 0 })),
                ]),
            ]),
        ],
    })
], NewuserPage);
//# sourceMappingURL=newuser.page.js.map