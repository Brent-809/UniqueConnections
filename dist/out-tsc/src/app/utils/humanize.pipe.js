import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { formatDistanceStrict, parseISO } from 'date-fns';
export let HumanizePipe = class HumanizePipe {
    transform(value) {
        return !!value ? formatDistanceStrict(parseISO(value), new Date(), { addSuffix: true }) : "";
    }
};
HumanizePipe = __decorate([
    Pipe({ name: 'humanizeDate' })
], HumanizePipe);
//# sourceMappingURL=humanize.pipe.js.map