
export interface MenuItemTranslations {
    name: string;
    language_code: string;
  }

export interface MenuItemType {
    icon_name: string;
    id: number;
    parent_id: string;
    has_icon: boolean;
    translations: MenuItemTranslations[];
}

export interface NavBarItemType {
    icon_name: string;
    id: number;
    page_id: string;
    drop_down_menu: MenuItemType[];
    has_icon: boolean;
    translations: MenuItemTranslations[];
}

export interface NavBarTranslation {
    title: string;
    subtitle: string;
}

export interface NavBarType {
    id: number;
    translations: NavBarTranslation[];
    menu_items: NavBarItemType[];
}

export interface PageTranslation {
    title: string;
    subtitle: string;
}

export interface Page {
    id: string;
    nav_bar: NavBarType[];
    translations: PageTranslation[];
}

export interface PageReturn {
    pages: Page[];
}


export default {};