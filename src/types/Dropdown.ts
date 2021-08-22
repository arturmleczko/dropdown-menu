type SimpleOption = {
    id: number;
    name: string;
}

export interface ExtensiveOption extends SimpleOption {
    iconName: string;
}

export type DropdownOption = SimpleOption | ExtensiveOption;