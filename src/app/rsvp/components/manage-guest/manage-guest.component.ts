import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Model } from '@skimp/client';
import { Desserts, GuestSchema, Mains, Starters } from 'anthony-and-alicya-domain';

import { OptionInterface } from '../../interfaces/option.interface';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { GuestService } from '../../services/guest.service';

@Component({
    selector: 'aa-manage-guest',
    templateUrl: './manage-guest.component.html'
})
export class ManageGuestComponent {
    public get guest(): GuestSchema {
        return this._guest;
    }

    @Input()
    public set guest(guest: GuestSchema) {
        this._guest = guest;

        this._attending = guest.attending;
        this._starter = guest.starter;
        this._main = guest.main;
        this._dessert = guest.dessert;
    }

    @Output()
    public save: EventEmitter<void> = new EventEmitter<void>();

    public attendingOptions: Array<OptionInterface> = [
        {
            value: true,
            label: 'Attending'
        },
        {
            value: null,
            label: 'Undecided'
        },
        {
            value: false,
            label: 'Not attending'
        }
    ];

    public starterOptions: Array<OptionInterface>;
    public mainOptions: Array<OptionInterface>;
    public dessertOptions: Array<OptionInterface>;

    private readonly _translatePipe: TranslatePipe;
    private _attending: boolean | null = null;
    private _starter: string | null = null;
    private _main: string | null = null;
    private _dessert: string | null = null;
    private _guest!: GuestSchema;
    private readonly _guestService: GuestService;

    constructor(translatePipe: TranslatePipe, guestService: GuestService) {
        this._translatePipe = translatePipe;
        this._guestService = guestService;

        this.starterOptions = [
            {
                value: Starters.PORK,
                label: this._translatePipe.transform(Starters.PORK)
            },
            {
                value: Starters.TERRINE,
                label: this._translatePipe.transform(Starters.TERRINE)
            },
            {
                value: Starters.GOATS_CHEESE,
                label: this._translatePipe.transform(Starters.GOATS_CHEESE)
            }
        ];

        this.mainOptions = [
            {
                value: Mains.PORK,
                label: this._translatePipe.transform(Mains.PORK)
            },
            {
                value: Mains.CHICKEN,
                label: this._translatePipe.transform(Mains.CHICKEN)
            },
            {
                value: Mains.TAGINE,
                label: this._translatePipe.transform(Mains.TAGINE)
            }
        ];

        this.dessertOptions = [
            {
                value: Desserts.FONDANT,
                label: this._translatePipe.transform(Desserts.FONDANT)
            },
            {
                value: Desserts.CREME_BRULE,
                label: this._translatePipe.transform(Desserts.CREME_BRULE)
            },
            {
                value: Desserts.STICKY_TOFFEE,
                label: this._translatePipe.transform(Desserts.STICKY_TOFFEE)
            }
        ];
    }

    public async onSubmit(event: Event): Promise<void> {
        event.preventDefault();

        await this._save();
    }

    public onAttendingChange(attending: boolean | null): void {
        this._attending = attending;
    }

    public onStarterChange(starter: string | null): void {
        this._starter = starter;
    }

    public onMainChange(main: string | null): void {
        this._main = main;
    }

    public onDessertChange(dessert: string | null): void {
        this._dessert = dessert;
    }

    private async _save(): Promise<void> {
        const cloned: GuestSchema = Model.clone<GuestSchema>(this._guest);

        cloned.attending = this._attending;
        cloned.starter = this._starter;
        cloned.main = this._main;
        cloned.dessert = this._dessert;

        await this._guestService.save(cloned);

        this.save.emit();
    }
}
